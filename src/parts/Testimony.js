import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import ImageTestimonyFrame from "../assets/images/image-testimonial-frame.jpg";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div style={{ width: 405, height: 541 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt={data.name}
                className="img-fluid position-absolute"
                style={{ zIndex: 2 }}
              ></img>
              <img
                src={ImageTestimonyFrame}
                alt={data.name}
                className="img-fluid position-absolute"
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              ></img>
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className="font-weight-bold" style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button className="btn px-5" isPrimary hasShadow style={{ marginTop: 40 }} type="link" href={`/tetimonial/${data._id}`} >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
