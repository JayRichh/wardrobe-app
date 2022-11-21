import React from "react";
import Button from "./elements/Button";
import UserReviewPreview from "./UserReviewPreview";

const JoinUs = () => {
  return (
    <div className="bg-complimentPink text-gray-700">
      <div className="px-16 pt-24 text-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900">
          Join the styling revolution
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Meet our community of Stylers.
        </p>
        <p className="text-lg text-gray-700">
          Join out brand ambassador program and earn money by sharing your
          style. - <i>Coming soon</i>
        </p>
        <div className="btn-container mt-4 text-white">
          <Button
            variant="secondary"
            onClick={() => {
              window.location.href = "/store";
            }}
          >
            Join The Crew &gt;
          </Button>
        </div>
      </div>
      <UserReviewPreview />
    </div>
  );
};

export default JoinUs;
