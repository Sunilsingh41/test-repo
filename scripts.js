document.addEventListener('DOMContentLoaded', function() {
    const links = [
        {
            name: "Ministry of Corporate Affairs (MCA)",
            url: "https://www.mca.gov.in/",
            purpose: "Link to the official MCA portal where users can verify company details and compliance."
        },
        {
            name: "Security Industry Regulatory Body (India)",
            url: "https://psara.gov.in/",
            purpose: "Link to the regulatory body governing private security agencies in India for more information on legal requirements."
        },
        {
            name: "Jharkhand Police",
            url: "https://jhpolice.gov.in/",
            purpose: "Provide a link to the Jharkhand Police for information on local law enforcement and security coordination."
        },
        {
            name: "Security Industry Association (SIA)",
            url: "https://www.securityindustry.org/",
            purpose: "A global body representing the security industry, offering resources and certifications relevant to your business."
        },
        {
            name: "LinkedIn Company Profile",
            url: "#", // Replace with your company's LinkedIn profile URL
            purpose: "Link to Eagle Eye Shield Security LLP's LinkedIn profile to showcase professionalism and client testimonials."
        },
        {
            name: "Google My Business",
            url: "#", // Replace with your company's Google My Business profile URL
            purpose: "Direct link to the company's Google My Business profile to allow potential clients to view reviews and business information."
        },
        {
            name: "ISO Certification Body",
            url: "https://www.iso.org/",
            purpose: "If your company has ISO certifications, link to the relevant ISO certification body for users to verify."
        },
        {
            name: "Justdial - Business Listings",
            url: "https://www.justdial.com/",
            purpose: "Listings in local business directories can enhance visibility and credibility."
        },
        {
            name: "Sulekha - Business Directory",
            url: "https://www.sulekha.com/",
            purpose: "Listings in local business directories can enhance visibility and credibility."
        },
        {
            name: "IndiaMart - Business Listings",
            url: "https://www.indiamart.com/",
            purpose: "Listings in local business directories can enhance visibility and credibility."
        },
        {
            name: "Jharkhand Chamber of Commerce",
            url: "https://www.fjcci.in/",
            purpose: "Link to the Jharkhand Chamber of Commerce for local business networking and credibility."
        },
        {
            name: "CERT-In (Indian Computer Emergency Response Team)",
            url: "https://www.cert-in.org.in/",
            purpose: "Provide information on cybersecurity practices relevant to physical security services."
        },
        {
            name: "Security Sector Skill Development Council (SSSDC)",
            url: "https://www.sssdc.in/",
            purpose: "Link to institutes providing certified security training courses relevant to your staff and potential recruits."
        }
    ];

    const linksList = document.getElementById('links-list');

    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.title = link.purpose;
        anchor.target = "_blank"; // Opens the link in a new tab
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
    });
});
