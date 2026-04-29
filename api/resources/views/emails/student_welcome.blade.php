<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Alumni Connect!</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px;">
        <tr>
            <td>
                
                <!-- Email Container -->
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background:#115842; color:#ffffff; padding:20px; text-align:center;">
                            <h2 style="margin:0;">Alumni Connect Account Credentials</h2>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:30px; color:#333333;">
                            <h3 style="margin-top:0;">Login Credientials for Alumni Connect Account</h3>

                            <p>Welcome {{ $fullName }}</p>

                            <p>Your account has been created successfully. </p>

                            <!-- OTP Box -->
                            <div style="text-align:center; margin:30px 0;">
                                <span style="display:inline-block; padding:15px 30px; font-size:20px; background:#f3f4f6; border-radius:8px; font-weight:bold;">
                                    <strong>Username:</strong> {{ $email }}
                                    <br><strong>Password:</strong> {{ $password }}
                                </span>
                            </div>

                            <p>Please login and change your password immediately.</p>


                            <p>For security reasons, do not share your credentials.</p>
                            <br>

                            <p>Regards,<br><strong>Alumni Connect Team</strong></p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#f9fafb; text-align:center; padding:15px; font-size:12px; color:#888;">
                            © {{ date('Y') }} Alumni Connect. All rights reserved.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>