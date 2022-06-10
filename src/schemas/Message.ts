import mongoose, { Document, Schema } from "mongoose";

type Message = Document & {
  to: String;
  text: String;
  created_at: Date;
  roomId: String;
};

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: "ChatRooms",
  },
});

const Message = mongoose.model<Message>("Messages", MessageSchema);

export { Message };
