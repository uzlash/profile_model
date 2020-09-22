const mongoose = require("mongoose");

const ProfileSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ["student", "staff", "independentResearcher"],
    required,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  currentLogin: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
  personalInformation: {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    fullName: { type: String, default: "" },
    email: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "n/a"] },
    dob: { type: Date, required: true },
    phone: { type: String },
    residentialAddress: { type: String },
    state: { type: String },
  },
  institutionInformation: {
    institutionName: { type: String, required: true },
    institutionType: {
      type: String,
      required: true,
      enum: ["Tertiary Institution", "Independent Researcher", "Organization"],
    },
    department: { type: String },
    faculty: { type: String },
    idNumber: { type: String },
  },
  researchWorks: [
    {
      researchTitle: { type: String, default: "" },
      pages: { type: Number },
      collaborators: [{ type: String }],
      focusArea: [{ type: String, default: "" }],
      researchAuthor: { type: String },
      dateCreated: { type: Date, default: Date.now },
      lastModified: { type: Date, default: Date.now },
      mentions: [{ type: String }],
    },
  ],
  analytics: {
    readHistory: [
      {
        title: { type: String },
        author: { type: String },
        PagesRead: { type: Number, default: 0 },
        startTime: { type: Date },
        stopTime: { type: Date },
      },
    ],
    suggestions: [{ type: String }],
    areasOfInterest: [{ type: String }],
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
