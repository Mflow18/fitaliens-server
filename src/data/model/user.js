import mongoose from "mongoose";

import User from "../schema/User";

const Example = mongoose.model("Example", User);

export default Example;
