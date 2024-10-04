import React from 'react'

const Privacy = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            {/* Health Image Section */}
            <div className="banner">
                <img src={imageUrl} alt="Health Tips" />
            </div>

            {/* Health Tips Sections */}
            <div className="banner">
                <h2>Privacy Policy</h2>
                <h3>Your Privacy Matters at Care404</h3>
                <p>
                    At <b>Care404</b>, we understand the importance of privacy and are committed to protecting the personal
                    information you share with us. This Privacy Policy outlines our practices concerning the collection,
                    use, and protection of your information. By using our services, you agree to the terms of this policy.
                </p>

                <h4>Information We Collect</h4>
                <p>
                    We collect various types of information to provide and enhance our services. This includes:
                </p>
                <ul>
                    <li><strong>Personal Information:</strong> Such as your name, email address, and phone number when you register or book appointments.</li>
                    <li><strong>Health Data:</strong> Information regarding your medical history or health concerns, which is only used to improve your healthcare experience.</li>
                    <li><strong>Usage Data:</strong> Details about how you interact with our platform, including device type, IP address, and browsing activity.</li>
                </ul>

                <h4>How We Use Your Information</h4>
                <p>
                    The information we collect is used to provide, maintain, and improve the services offered by <b>Care404</b>. Specifically, we use it to:
                </p>
                <ul>
                    <li>Facilitate appointment scheduling and management.</li>
                    <li>Personalize your experience based on your health profile and preferences.</li>
                    <li>Analyze platform usage to identify areas for improvement.</li>
                    <li>Communicate with you regarding service updates, changes, or health reminders.</li>
                </ul>

                <h4>Data Security</h4>
                <p>
                    We prioritize the security of your data by employing industry-standard encryption and secure storage methods.
                    Access to your information is restricted to authorized personnel only, and we continually monitor our systems
                    for potential vulnerabilities to prevent unauthorized access.
                </p>

                <h4>Third-Party Sharing</h4>
                <p>
                    <b>Care404</b> does not sell, trade, or share your personal data with third parties for marketing purposes.
                    In cases where third-party service providers assist in providing healthcare services or technical support,
                    they are required to maintain confidentiality and comply with strict data protection standards.
                </p>

                <h4>Cookies and Tracking Technologies</h4>
                <p>
                    We may use cookies or similar tracking technologies to enhance your experience on our platform. These tools
                    help us understand how users interact with our site and allow us to provide tailored content. You have the
                    option to disable cookies in your browser settings, although this may limit certain features.
                </p>

                <h4>Your Rights and Choices</h4>
                <p>
                    You have the right to access, update, or delete your personal information at any time. If you wish to make any
                    changes to your account or have concerns about how your data is being used, please contact our support team.
                </p>
                <p>
                    You may also choose to opt-out of receiving marketing communications from <b>Care404</b> by updating your preferences
                    in your account settings or by following the unsubscribe instructions included in our emails.
                </p>

                <h4>Changes to Our Privacy Policy</h4>
                <p>
                    <b>Care404</b> may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                    Any changes will be posted on this page, and we encourage you to review our policy periodically to stay informed about
                    how we protect your information.
                </p>

                <h4>Contact Us</h4>
                <p>
                    If you have any questions or concerns about our Privacy Policy, or if you need further assistance regarding your
                    personal data, please reach out to our privacy team at <b>adityamg30@gmail.com.</b>
                </p>

                <p>
                    Thank you for trusting <b>Care404</b> with your healthcare management. Your privacy and security are our top priority.
                </p>
            </div>
        </div>
    )
}

export default Privacy
