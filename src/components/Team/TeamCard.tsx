import "./TeamCard.css";

interface TeamCardProps {
  name: string;
  designation: string;
  image: string;
  bio: string;
}

export default function TeamCard({
  name,
  designation,
  image,
  bio,
}: TeamCardProps) {
  return (
    <div className="team-card">

      <div className="team-image-wrapper">

        <img
          src={image}
          alt={name}
          className="team-image"
        />

        <div className="team-overlay">
          <p>{bio}</p>
        </div>

      </div>

      <h3 className="team-name">{name}</h3>

      <p className="team-designation">
        {designation}
      </p>

    </div>
  );
}