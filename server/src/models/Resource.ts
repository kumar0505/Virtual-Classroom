// import { Document, model, Schema } from "mongoose";

// enum HttpMethods {
//     GET = 'GET',
//     POST = 'POST',
//     PUT = 'PUT',
//     DELETE = 'DELETE'
// }

// export interface IResource extends Document {
//     resourceName: string;
//     endpoint: string;
//     permissionName: string;
//     actionType: string;
// }

// const resourceSchema = new Schema<IResource>({
//     resourceName: { type: String, required: [true, 'resourceName is required.'], uppercase: true },
//     endpoint: { type: String, required: [true, 'endpoint is required.'] },
//     permissionName: { type: String, required: [true, 'permissionName is required.'], unique: true },
//     actionType: { type: String, enum: HttpMethods }
// }, { timestamps: true })

// export const Resource = model<IResource>('Resource', resourceSchema, 'Resource');