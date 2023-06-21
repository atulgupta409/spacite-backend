const mongoose = require("mongoose");

const coworkingSpaceModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    website_Url: String,
    images: [
      {
        image: String,
        name: String,
        alt: String,
      },
    ],
    amenties: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Amenity",
      },
    ],
    seo: {
      title: { type: String },
      description: { type: String },
      robots: String,
      index: { type: Boolean },
      keywords: String,
      url: String,
      status: {
        type: Boolean,
        default: true,
      },
      twitter: {
        title: String,
        description: String,
      },
      open_graph: {
        title: String,
        description: String,
      },
    },
    location: {
      name: String,
      name1: String,
      floor: String,
      address: String,
      country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
      },
      state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
      },
      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
      micro_location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MicroLocation",
      },
      latitude: Number,
      longitude: Number,
      is_near_metro: {
        type: Boolean,
        default: false,
      },
      is_ferry_stop: {
        type: Boolean,
        default: false,
      },
      is_bus_stop: {
        type: Boolean,
        default: false,
      },
      is_taxi_stand: {
        type: Boolean,
        default: false,
      },
      is_tram: {
        type: Boolean,
        default: false,
      },
      is_hospital: {
        type: Boolean,
        default: false,
      },
      is_school: {
        type: Boolean,
        default: false,
      },
      is_restro: {
        type: Boolean,
        default: false,
      },
    },
    hours_of_operation: {
      monday_friday: {
        from: String,
        to: String,
        should_show: {
          type: Boolean,
          default: true,
        },
        is_closed: {
          type: Boolean,
          default: false,
        },
        is_open_24: {
          type: Boolean,
          default: false,
        },
      },
      saturday: {
        from: String,
        to: String,
        should_show: {
          type: Boolean,
          default: false,
        },
        is_closed: {
          type: Boolean,
          default: false,
        },
        is_open_24: {
          type: Boolean,
          default: false,
        },
      },
      sunday: {
        from: String,
        to: String,
        should_show: {
          type: Boolean,
          default: false,
        },
        is_closed: {
          type: Boolean,
          default: false,
        },
        is_open_24: {
          type: Boolean,
          default: false,
        },
      },
    },
    no_of_seats: Number,
    plans: [
      {
        id: Number,
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "PropertyType",
        },
        duration: String,
        price: Number,
        should_show: {
          type: Boolean,
          default: true,
        },
      },
    ],
    contact_details: [
      {
        id: Number,
        user: String,
        email: String,
        phone: String,
        designation: String,
      },
    ],
    is_active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ["pending", "approve", "reject"],
      default: "pending",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    slug: String,
    is_popular: {
      value: {
        type: Boolean,
        default: false,
      },
      order: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const CoworkingSpace = mongoose.model("CoworkingSpace", coworkingSpaceModel);
module.exports = CoworkingSpace;
