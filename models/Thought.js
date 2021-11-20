const { Schema, model, Types } = require("mongoose");

// const reactionSchema = new Schema(
//   {
//     reactionid: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       //create format function for getter
//     },
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //create date format for getter
    },
    // reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// ThoughtSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
