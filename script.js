// Company Information (Demo Data)

const companies = [

    {
        name: "TechNova Solutions",
        category: "IT",
        icon: "💻",
        location: "Chennai, Tamil Nadu",
        address: "Demo Office Address, Chennai",
        description: "A sample software development company focused on web and digital solutions.",
        hours: "Monday - Friday, 9 AM - 6 PM",
        email: "hello@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Chennai"
    },

    {
        name: "PixelCraft Studio",
        category: "Startup",
        icon: "🎨",
        location: "Bangalore, Karnataka",
        address: "Demo Office Address, Bangalore",
        description: "A sample creative technology startup working on digital experiences.",
        hours: "Monday - Saturday, 10 AM - 6 PM",
        email: "contact@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Bangalore"
    },

    {
        name: "NextGen Academy",
        category: "Education",
        icon: "🎓",
        location: "Puducherry, India",
        address: "Demo Office Address, Puducherry",
        description: "A sample learning centre offering technology and professional training.",
        hours: "Monday - Saturday, 9 AM - 5 PM",
        email: "info@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Puducherry"
    },

    {
        name: "CodeBridge Technologies",
        category: "IT",
        icon: "⚙️",
        location: "Hyderabad, Telangana",
        address: "Demo Office Address, Hyderabad",
        description: "A sample technology company focused on software and IT solutions.",
        hours: "Monday - Friday, 9 AM - 6 PM",
        email: "hello@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Hyderabad"
    },

    {
        name: "StartUp Hub",
        category: "Startup",
        icon: "🚀",
        location: "Chennai, Tamil Nadu",
        address: "Demo Office Address, Chennai",
        description: "A sample startup workspace for innovation and business development.",
        hours: "Monday - Saturday, 10 AM - 7 PM",
        email: "contact@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Chennai"
    },

    {
        name: "Bright Future Institute",
        category: "Education",
        icon: "📚",
        location: "Coimbatore, Tamil Nadu",
        address: "Demo Office Address, Coimbatore",
        description: "A sample educational institute focused on skill development.",
        hours: "Monday - Friday, 9 AM - 5 PM",
        email: "info@example.com",
        website: "https://example.com",
        map: "https://www.google.com/maps/search/?api=1&query=Coimbatore"
    }

];

const companyGrid = document.getElementById("companyGrid");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");


// Display Companies

function displayCompanies(data) {

    companyGrid.innerHTML = "";

    if (data.length === 0) {
        companyGrid.innerHTML =
            "<p>No companies found. Try another search.</p>";
        return;
    }

    data.forEach((company, index) => {

        const card = document.createElement("div");

        card.className = "company-card";

        card.innerHTML = `

            <div class="company-icon">
                ${company.icon}
            </div>

            <span class="category">
                ${company.category}
            </span>

            <h3>${company.name}</h3>

            <p>📍 ${company.location}</p>

            <p>${company.description}</p>

            <button
                class="card-btn"
                onclick="showDetails(${index})">
                View Details →
            </button>

        `;

        companyGrid.appendChild(card);

    });

}


// Search and Filter

function filterCompanies() {

    const searchText =
        searchInput.value.toLowerCase();

    const selectedCategory =
        categoryFilter.value;

    const filtered = companies.filter(company => {

        const matchesSearch =
            company.name.toLowerCase().includes(searchText) ||
            company.location.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            company.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displayCompanies(filtered);

}


// Show Company Details

function showDetails(index) {

    const company = companies[index];

    document.getElementById("modalDetails").innerHTML = `

        <h2>${company.icon} ${company.name}</h2>

        <span class="category">${company.category}</span>

        <p><strong>📍 Location:</strong> ${company.location}</p>

        <p><strong>Address:</strong> ${company.address}</p>

        <p><strong>About:</strong> ${company.description}</p>

        <p><strong>Working Hours:</strong> ${company.hours}</p>

        <p><strong>Email:</strong> ${company.email}</p>

        <a href="${company.map}"
           target="_blank"
           class="modal-link">
           View Location →
        </a>

        <a href="${company.website}"
           target="_blank"
           class="modal-link">
           Visit Website →
        </a>

    `;

    document.getElementById("companyModal").style.display = "flex";

}


// Close Popup

function closeModal() {

    document.getElementById("companyModal").style.display = "none";

}


// Event Listeners

searchInput.addEventListener("input", filterCompanies);

categoryFilter.addEventListener("change", filterCompanies);


// Initial Display

displayCompanies(companies);