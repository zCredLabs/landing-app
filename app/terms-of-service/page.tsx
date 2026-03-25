export default function TermsOfServicePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

            <section className="prose max-w-3xl mx-auto">
                <h2>Acceptance of Terms</h2>
                <p>By accessing or using zCred's services, you agree to these terms and conditions.</p>

                <h2>User Responsibilities</h2>
                <p>Users are responsible for:</p>
                <ul>
                    <li>Providing accurate and complete information</li>
                    <li>Maintaining the confidentiality of their account</li>
                    <li>Complying with all applicable laws</li>
                </ul>

                <h2>Service Usage</h2>
                <p>zCred provides identity verification services with the following conditions:</p>
                <ul>
                    <li>Services are for authorized and legal purposes only</li>
                    <li>We reserve the right to suspend or terminate accounts</li>
                    <li>Pricing and service features may change</li>
                </ul>

                <h2>Limitation of Liability</h2>
                <p>zCred is not liable for indirect, incidental, or consequential damages arising from service use.</p>
            </section>
        </div>
    )
}