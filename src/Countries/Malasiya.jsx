import React from 'react';
import { motion } from 'framer-motion';

// --- Icons (from react-icons) ---
// Make sure to install: npm install react-icons
import {
  FaPassport, FaMoneyBillWave, FaClock, FaCalendarAlt, FaFileAlt,
  FaBuilding, FaEnvelope, FaPhone, FaCheckCircle
} from 'react-icons/fa';

// --- Page Data ---
// I've organized all the data you provided into easy-to-use objects.

const stickerVisa = {
  title: "Sticker Visa",
  subtitle: "From the Embassy",
  totalFee: "PKR 18,000",
  feeBreakdown: {
    embassy: "PKR 12,900",
    service: "PKR 1,600"
  },
  processingTime: "12-15 Working Days",
  validity: "3 Months",
  stay: "1 Month (extendable)",
  documents: [
    "Original Passport (valid for at least 9 months)",
    "4 pictures with white background",
    "Last 6-month bank statement",
    "Bank account maintenance letter",
    "Visa request letter",
    "NTN (National Tax No.) if applicable",
    "Return air ticket"
  ]
};

const eVisa = {
  title: "E-Visa",
  subtitle: "Online",
  totalFee: "PKR 15,000",
  processingTime: "4-7 Days",
  validity: "6 Months",
  stay: "1 Month",
  documents: [
    "Passport 1st & 2nd page scan copy (valid at least 9 months)",
    "4 pictures with white background (35mm x 50mm)",
    "CNIC copy",
    "Last 6-month bank statement",
    "Bank account maintenance letter",
    "Visa request letter",
    "Return air ticket (for E-Visa only)"
  ]
};

const embassyInfo = {
  address: "Plot No. 144-150 Street No. 17, Sector G-5, Diplomatic Enclave, Islamabad, Pakistan.",
  email: "mwislamabad@kln.gov.my",
  phone: "(92 51) 2072900"
};

// --- Framer Motion Variants ---
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Main Component ---
function Malaysia() {
  return (
    <motion.div
      className="container mx-auto p-4 md:p-10 bg-gray-50 min-h-screen"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Page Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
        <img
          src="https://flagcdn.com/w160/my.png" // Malaysia flag
          alt="Flag of Malaysia"
          className="w-16 h-10 object-cover rounded shadow-md"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Malaysia Visa
          </h1>
          <p className="text-xl text-gray-600">
            Visa Requirements for Pakistani Citizens
          </p>
        </div>
      </motion.div>

      {/* 2. Visa Comparison Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <VisaCard visa={stickerVisa} isSticker={true} />
        <VisaCard visa={eVisa} isSticker={false} />
      </motion.div>

      {/* 3. Embassy Information */}
      <motion.div
        variants={itemVariants}
        className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FaBuilding className="text-blue-600" />
          Embassy / High Commission Details
        </h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li className="flex items-start gap-4">
            <FaBuilding className="text-gray-500 mt-1.5 shrink-0" />
            <span><strong>Address:</strong> {embassyInfo.address}</span>
          </li>
          <li className="flex items-start gap-4">
            <FaEnvelope className="text-gray-500 mt-1.5 shrink-0" />
            <span><strong>Email:</strong> <a href={`mailto:${embassyInfo.email}`} className="text-blue-600 hover:underline">{embassyInfo.email}</a></span>
          </li>
          <li className="flex items-start gap-4">
            <FaPhone className="text-gray-500 mt-1.5 shrink-0" />
            <span><strong>Phone:</strong> <a href={`tel:${embassyInfo.phone}`} className="text-blue-600 hover:underline">{embassyInfo.phone}</a></span>
          </li>
        </ul>
      </motion.div>

      {/* Footer Note */}
      <motion.div variants={itemVariants} className="text-center mt-10 text-sm text-gray-500">
        <p>All fees and processing times are provided by O.S. Travel & Tours and are subject to change.</p>
      </motion.div>

    </motion.div>
  );
}

// --- Reusable Sub-components ---

/**
 * A card component to display details for a single visa type.
 */
const VisaCard = ({ visa, isSticker }) => {
  const borderColor = isSticker ? "border-blue-500" : "border-green-500";
  const textColor = isSticker ? "text-blue-500" : "text-green-500";

  return (
    <div className={`bg-white rounded-lg shadow-xl overflow-hidden border-t-8 ${borderColor}`}>
      <div className="p-6 md:p-8">
        
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaPassport className={`text-4xl ${textColor}`} />
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{visa.title}</h2>
            <p className="text-lg text-gray-500">{visa.subtitle}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6 pt-4 border-t border-gray-100">
          <DetailItem icon={<FaMoneyBillWave className="text-green-600" />} label="Total Fee" value={visa.totalFee} />
          <DetailItem icon={<FaClock className="text-red-600" />} label="Processing Time" value={visa.processingTime} />
          <DetailItem icon={<FaCalendarAlt className="text-blue-600" />} label="Validity" value={visa.validity} />
          <DetailItem icon={<FaCalendarAlt className="text-purple-600" />} label="Stay Duration" value={visa.stay} />
        </div>

        {/* Fee Breakdown (only for sticker visa) */}
        {visa.feeBreakdown && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            <p className="font-semibold">Fee Breakdown:</p>
            <ul className="list-disc list-inside ml-2">
              <li>Embassy Fee: {visa.feeBreakdown.embassy}</li>
              <li>Service Charges: {visa.feeBreakdown.service}</li>
            </ul>
          </div>
        )}

        {/* Documents List */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaFileAlt className="text-gray-600" />
          Documents Required
        </h3>
        <ul className="space-y-3">
          {visa.documents.map((doc, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle className="text-green-500 mt-1.5 shrink-0" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * A small component for displaying an icon, label, and value.
 */
const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="text-2xl text-gray-600 mt-1">{icon}</div>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-lg font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default Malaysia;