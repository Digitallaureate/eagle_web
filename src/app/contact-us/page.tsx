"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Users,
  Wrench,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { footerContent } from "@/utils/footerContent";

type InquiryCategory = {
  id:
  | "drone-solutions"
  | "manufacturing-development"
  | "education-training"
  | "partnerships-collaborations";
  title: string;
  description: string;
};

type InquiryCategoryId = InquiryCategory["id"];

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  message: string;
};

const inquiryCategories: InquiryCategory[] = [
  {
    id: "drone-solutions",
    title: "Drone Solutions",
    description:
      "For inquiries related to agriculture, industrial, commercial, and tactical drone applications.",
  },
  {
    id: "manufacturing-development",
    title: "Manufacturing & Development",
    description:
      "Connect with us regarding future manufacturing initiatives, technical development, and production ecosystem opportunities.",
  },
  {
    id: "education-training",
    title: "Education & Training",
    description:
      "For student programs, technical learning initiatives, pilot training awareness, and future educational collaborations.",
  },
  {
    id: "partnerships-collaborations",
    title: "Partnerships & Collaborations",
    description:
      "For institutional partnerships, research initiatives, technology collaborations, and industry engagement opportunities.",
  },
];

const categoryIcons = {
  "drone-solutions": Smartphone,
  "manufacturing-development": Wrench,
  "education-training": GraduationCap,
  "partnerships-collaborations": Handshake,
} as const;

export default function ContactUsPage() {
  const [selectedCategory, setSelectedCategory] = useState<InquiryCategoryId>(
    inquiryCategories[0].id
  );
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    message: "",
  });
  const activeCategory =
    inquiryCategories.find((category) => category.id === selectedCategory) ??
    inquiryCategories[0];
  const phoneNumberIsValid =
    !formData.phoneNumber || isValidPhoneNumber(formData.phoneNumber);

  const handleFieldChange = (
    field: keyof ContactFormState,
    value: ContactFormState[keyof ContactFormState]
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      window.alert("Please fill in First Name, Last Name, Email, and Message.");
      return;
    }

    if (formData.phoneNumber && !isValidPhoneNumber(formData.phoneNumber)) {
      window.alert("Please enter a valid phone number for the selected country.");
      return;
    }

    const subject = `Website Inquiry - ${activeCategory.title}`;
    const body = [
      "New inquiry from Eagle AI Aerospace website",
      "",
      `Inquiry Category: ${activeCategory.title}`,
      `First Name: ${formData.firstName}`,
      `Last Name: ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone Number: ${formData.phoneNumber || "Not provided"}`,
      `Organization / Institution: ${formData.organization || "Not provided"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${footerContent.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-white text-[#193C54]">
      <section className="relative h-[420px] w-full overflow-hidden md:h-[820px]">
        <Image
          src="/assets/contact_us.png"
          alt="Contact us hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#07111C]/78" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col items-start justify-center px-6 pb-14 pt-32 text-left text-white">
          <h1 className="text-5xl font-extrabold sm:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1.24fr]">
          <div className="rounded-[1.75rem] bg-[#214764] p-8 text-white shadow-lg sm:p-10">
            <h2 className="text-4xl font-bold">Contact With Us</h2>

            <div className="mt-8 space-y-4">
              {inquiryCategories.map((category) => {
                const Icon = categoryIcons[category.id];
                const isActive = activeCategory.id === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-5 text-left transition ${isActive
                      ? "border-white bg-white text-[#193C54]"
                      : "border-white/30 bg-transparent text-white hover:bg-white/8"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                      <span className="text-xl font-semibold">{category.title}</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isActive ? "rotate-[-90deg]" : ""}`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-10 border-t border-white/20 pt-8">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <div className="mt-6 space-y-5 text-white/90">
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="mt-1 text-sm leading-7">{footerContent.contact.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    {footerContent.contact.phoneNumbers.map((phone) => (
                      <p key={phone.label} className="mt-1 text-sm leading-7">
                        {phone.label}: {phone.value}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="mt-1 text-sm leading-7">{footerContent.contact.email}</p>
                  </div>
                </div>
                {/* <div className="flex gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="mt-1 text-sm leading-7">www.eagleaerospace.in</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="mb-8">

              <h2 className="mt-3 text-3xl font-bold text-[#193C54]">Let&apos;s Connect</h2>
              <p className="mt-4 text-base leading-8 text-[#434242]">
                EAGLE AI AEROSPACE (OPC) welcomes inquiries related to drone technology, future collaborations, industrial applications, education initiatives, manufacturing development, and upcoming UAV projects.
              </p>
              <p className="mt-3 text-base leading-8 text-[#434242]">
                Whether you are an industry professional, institution, investor, student, or technology enthusiast, we look forward to connecting and exploring future opportunities together.
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-[#f4f8fb] p-5">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#193C54]" />
                <p className="text-lg font-semibold text-[#193C54]">{activeCategory.title}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#4a5565]">
                {activeCategory.description}
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">First Name*</span>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(event) => handleFieldChange("firstName", event.target.value)}
                    className="mt-3 w-full border-b border-slate-300 pb-3 text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]"
                    placeholder="Enter first name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">Last Name*</span>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(event) => handleFieldChange("lastName", event.target.value)}
                    className="mt-3 w-full border-b border-slate-300 pb-3 text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]"
                    placeholder="Enter last name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">Email*</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleFieldChange("email", event.target.value)}
                    className="mt-3 w-full border-b border-slate-300 pb-3 text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]"
                    placeholder="Enter email address"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">Phone Number</span>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    value={formData.phoneNumber || undefined}
                    onChange={(value) => handleFieldChange("phoneNumber", value ?? "")}
                    className={`contact-phone-input mt-3 border-b pb-3 ${phoneNumberIsValid ? "border-slate-300" : "border-red-500"
                      }`}
                    numberInputProps={{
                      className:
                        "w-full bg-transparent text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]",
                      placeholder: "Enter phone number",
                      "aria-invalid": !phoneNumberIsValid,
                    }}
                  />
                  {!phoneNumberIsValid && (
                    <p className="mt-2 text-sm text-red-500">
                      Please enter a valid phone number for the selected country.
                    </p>
                  )}
                </label>
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">Organization / Institution</span>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(event) => handleFieldChange("organization", event.target.value)}
                    className="mt-3 w-full border-b border-slate-300 pb-3 text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]"
                    placeholder="Enter organization"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#98A2B3]">Inquiry Category</span>
                  <select
                    value={selectedCategory}
                    onChange={(event) =>
                      setSelectedCategory(event.target.value as InquiryCategoryId)
                    }
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-base text-[#193C54] outline-none"
                  >
                    {inquiryCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-[#98A2B3]">Message*</span>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  className="mt-3 w-full border-b border-slate-300 pb-3 text-base text-[#193C54] outline-none placeholder:text-[#98A2B3]"
                  placeholder="Share your inquiry with us"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#193C54] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#143247]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
