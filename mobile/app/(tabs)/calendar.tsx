import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar, LocaleConfig, DateData } from 'react-native-calendars';
import { useRouter } from 'expo-router';
import { useDrawer } from '../context/DrawerContext';

// Locale config for Monday first
LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};
LocaleConfig.defaultLocale = 'en';

// Mock events data
const allEvents = [
  {
    id: '1',
    title: 'Annual Convocation Ceremony',
    date: '2025-12-11',
    department: 'All',
    description: 'Annual Convocation Ceremony to be held on 11 December in presence of SDO.',
  },
  {
    id: '2',
    title: 'Winter Sports Meet',
    date: '2025-12-20',
    department: 'All',
    description: 'Winter Sports Meet to be held on 20th December at the university sports complex.',
  },
  {
    id: '3',
    title: 'Poster Making Competition',
    date: '2025-12-15',
    department: 'CS',
    description: 'Department of Computer Science organizing a poster making competition on "Future of AI".',
  },
  {
    id: '4',
    title: 'Alumni Talk: Digital Marketing',
    date: '2025-12-26',
    department: 'All',
    description: 'Alumni Talk by Mr. Ahmar Ali (Batch 2002) Head of Digital World on "Digital Marketing".',
  },
  {
    id: '5',
    title: 'Chemistry Seminar',
    date: '2025-12-05',
    department: 'Chemistry',
    description: 'Seminar on Nanotechnology by Dr. Sharma.',
  },
  {
    id: '6',
    title: 'Zoology Field Trip',
    date: '2025-12-18',
    department: 'Zoology',
    description: 'Field trip to National Park for biodiversity study.',
  },
  {
    id: '7',
    title: 'Islamiyat Conference',
    date: '2025-12-22',
    department: 'Islamiyat',
    description: 'Interfaith Harmony Conference organized by Department of Islamiyat.',
  },
];

// Department colors (background when unselected)
const departments = ['All', 'IS', 'English', 'Math', 'Chemistry', 'Zoology', 'Islamiyat'];
const departmentColors: Record<string, string> = {
  All: '#E8F5E9',      // light green
  IS: '#FFE0B2',       // light orange
  English: '#FFCDD2',  // light red
  Math: '#C8E6C9',     // soft green
  Chemistry: '#B3E5FC', // light blue
  Zoology: '#D1C4E9',  // lavender
  Islamiyat: '#FFF9C4', // light yellow
};

// Custom Day Component (updated with smaller dimensions)
const CustomDay = (props: any) => {
  const { date, state, marking, onPress } = props;
  const dayNumber = date ? date.day : '';
  const isEventDay = marking?.eventDay === true;
  const isSelected = marking?.selected === true;

  let backgroundColor = 'transparent';
  let textColor = '#333';

  if (isSelected) {
    backgroundColor = '#115842';
    textColor = '#fff';
  } else if (isEventDay) {
    backgroundColor = '#E8F5E9'; // light green background for event days
    textColor = '#115842';
  }

  return (
    <TouchableOpacity
      style={[styles.dayContainer, { backgroundColor }]}
      onPress={() => onPress?.(date)}
      disabled={state === 'disabled'}
    >
      <Text style={[styles.dayText, { color: textColor, fontWeight: state === 'today' ? 'bold' : 'normal' }]}>
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default function EventCalendarScreen() {
  const router = useRouter();
  const { openDrawer } = useDrawer();
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState('2025-12-01');

  // Filter events based on selected department
  const filteredEvents = useMemo(() => {
    if (selectedDept === 'All') return allEvents;
    return allEvents.filter(event => event.department === selectedDept);
  }, [selectedDept]);

  // Build marked dates for custom day component
  const markedDates = useMemo(() => {
    const marks: any = {};
    filteredEvents.forEach(event => {
      const date = event.date;
      marks[date] = { ...marks[date], eventDay: true };
    });
    // Add selected date if any
    if (selectedDate) {
      marks[selectedDate] = { ...marks[selectedDate], selected: true };
    }
    return marks;
  }, [filteredEvents, selectedDate]);

  // Upcoming events list
  const upcomingEvents = useMemo(() => {
    return [...filteredEvents].sort((a, b) => a.date.localeCompare(b.date));
  }, [filteredEvents]);

  const handleDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const handleEventPress = (event: any) => {
    router.push({
      pathname: '/eventDetail',
      params: {
        title: event.title,
        date: event.date,
        description: event.description,
      },
    });
  };

  const renderEventItem = ({ item }: { item: typeof allEvents[0] }) => (
    <TouchableOpacity style={styles.eventItem} onPress={() => handleEventPress(item)}>
      <Feather name="calendar" size={18} color="#115842" style={styles.eventIcon} />
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDateSmall}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#115848" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with drawer and notification */}
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
            <Feather name="menu" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Event Calendar</Text>
          <TouchableOpacity onPress={() => router.push('/notifications')} style={styles.notificationButton}>
            <Feather name="bell" size={24} color="#FFFFFF" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Department Filters */}
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Organised by Department</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
          >
            {departments.map((dept) => (
              <TouchableOpacity
                key={dept}
                style={[
                  styles.filterChip,
                  selectedDept === dept && styles.filterChipActive,
                  { backgroundColor: selectedDept === dept ? '#115842' : departmentColors[dept] }
                ]}
                onPress={() => {
                  setSelectedDept(dept);
                  setSelectedDate(null);
                }}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedDept === dept && styles.filterTextActive,
                  ]}
                >
                  {dept}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Calendar Card - now more compact */}
        <View style={styles.calendarCard}>
          <Calendar
            current={currentMonth}
            onMonthChange={(month: any) => setCurrentMonth(month.dateString)}
            onDayPress={handleDayPress}
            markedDates={markedDates}
            dayComponent={CustomDay}
            theme={{
              calendarBackground: '#fff',
              textSectionTitleColor: '#666',
              todayTextColor: '#115842',
              arrowColor: '#115842',
              monthTextColor: '#115842',
              textMonthFontWeight: 'bold',
              textDayHeaderFontSize: 12,    // smaller day headers (Mon, Tue, etc.)
              textMonthFontSize: 14,         // smaller month title
            }}
            style={styles.calendar}
          />
        </View>

        {/* Selected Date Events */}
        {selectedDate && (
          <View style={styles.selectedDateSection}>
            <Text style={styles.selectedDateTitle}>Events on {selectedDate}</Text>
            {filteredEvents.filter(e => e.date === selectedDate).map(event => (
              <TouchableOpacity key={event.id} style={styles.selectedEventCard} onPress={() => handleEventPress(event)}>
                <Feather name="info" size={18} color="#115842" style={styles.eventIcon} />
                <Text style={styles.selectedEventText}>{event.title}</Text>
              </TouchableOpacity>
            ))}
            {filteredEvents.filter(e => e.date === selectedDate).length === 0 && (
              <Text style={styles.noEventText}>No events on this day.</Text>
            )}
          </View>
        )}

        {/* Upcoming Events List */}
        <View style={styles.eventsSection}>
          <Text style={styles.eventsTitle}>Upcoming Events</Text>
          <FlatList
            data={upcomingEvents}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#115848'
  },
  menuButton: { padding: 8 },
  headerTitle: { fontSize: 22, color: '#FFFFFF' },
  notificationButton: { 
    padding: 8, 
    position: 'relative' 
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  filterSection: { paddingHorizontal: 20, marginTop: 16 },
  filterLabel: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 12 },
  filterScroll: { paddingBottom: 8 },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  filterChipActive: {
    backgroundColor: '#115842', // fallback, but we set dynamically
  },
  filterText: {
    fontSize: 14,
    color: '#333', // dark text for unselected
  },
  filterTextActive: {
    color: '#fff',
  },
  calendarCard: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  calendar: {
    borderRadius: 16,
    padding: 4,          // reduced padding for a more compact look
  },
  dayContainer: {
    width: 30,           // reduced from 36
    height: 30,          // reduced from 36
    borderRadius: 15,    // half of width/height for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,        // reduced from 16
  },
  selectedDateSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  selectedDateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#115842',
    marginBottom: 8,
  },
  selectedEventCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f8f9fc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#115842',
  },
  selectedEventText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  noEventText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    paddingVertical: 8,
  },
  eventsSection: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    backgroundColor: '#f8f9fc',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  eventIcon: { marginRight: 12, marginTop: 2 },
  eventContent: { flex: 1 },
  eventTitle: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  eventDateSmall: { fontSize: 12, color: '#666' },
});