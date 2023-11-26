import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email():
    # Email configuration
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587  # Change to 587 for TLS
    smtp_user = 'mirandawebless@gmail.com'
    smtp_password = 'xjggpsfbrqsmmsjt'
    recipient_email = 'synteeve7yeti@gmail.com'

    # Message configuration
    subject = 'Test Email'
    body = 'This is a test email.'

    # Create MIMEText object
    message = MIMEMultipart()
    message['From'] = smtp_user
    message['To'] = recipient_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))

    # Connect to SMTP server and send email
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()  # Use starttls() for TLS
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, recipient_email, message.as_string())

    print('Email sent successfully!')

if __name__ == '__main__':
    send_email()
