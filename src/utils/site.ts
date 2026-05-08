export const site = {
    name: "ShipX Cargo Logistics Pvt. Ltd.",
    tagline: "Where Every Shipment Matters.",
    phone: "+91 92113 72239",
    email: "ops@shipxcargo.in",
    address: {
        registered:
            "6th Floor, Platina Tower, MG Road, Gurugram - 122002, Haryana, India.",
        regional:
            "A14/15, Golf Course Road, DLF Phase 1, Gurugram - 122002, Haryana, India.",
    },
    nav: [
        { label: "Home", href: "/" },

        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],
    footer: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ],

    servicesNav: [
        { label: "International Export/Import", href: "/services#international", hash: "#international" },
        { label: "Courier Services", href: "/services#courier", hash: "#courier" },
        { label: "Domestic Logistics", href: "/services#domestic", hash: "#domestic" },
        { label: "Customs Clearance", href: "/services#customs", hash: "#customs" },
    ],

    services: [
        { title: "Global Freight", href: "/services#international", desc: "Air & ocean freight with end-to-end coordination.", hash: "#international" },
        { title: "Cross-Border Road Transport", href: "/services#cross-border", desc: "Reliable movement across borders with smooth handling.", hash: "#cross-border" },
        { title: "Courier (Domestic & International)", href: "/services#courier", desc: "Fast document and parcel movement with tracking support.", hash: "#courier" },
        { title: "Domestic Bulk Cargo (FTL / PTL)", href: "/services#domestic", desc: "Pan-India movement with predictable timelines.", hash: "#domestic" },
        { title: "Customs Clearance (Sea & Air)", desc: "Documentation and clearance support at ports & airports.", hash: "#customs" },
        { title: "Warehousing & Distribution", desc: "Storage, dispatch and distribution support.", hash: "#warehousing" },
        { title: "Project & ODC Cargo", desc: "Specialized handling for heavy/oversized consignments.", hash: "#project" },
        { title: "Supply Chain Consulting", desc: "Cost and routing optimization for growing businesses.", hash: "#consultancy" },
    ],

    servicesGrid: [
        {
            id: "international",
            title: "Global Freight",
            image: "/assets/slider/global_freight.jpg",
        },
        {
            id: "custom-clearance",
            title: "Courier Services",
            image: "/assets/slider/courier_services.jpg",
        },
        {
            id: "door-to-door",
            title: "Domestic Logistics",
            image: "/assets/slider/domestics_logistics.jpg",
        },
        {
            id: "cross-border",
            title: "Value-Added Services",
            image: "/assets/slider/value_added_services.jpg",
        },
        {
            id: "domestic",
            title: "Specialized Solution",
            image: "/assets/slider/special_service.jpg",
        },
       
    ]
};
