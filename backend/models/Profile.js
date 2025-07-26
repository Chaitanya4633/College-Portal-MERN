import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  profileImage: { type: String },
  password: { type: String }  // Remove 'required: true' if not needed
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
