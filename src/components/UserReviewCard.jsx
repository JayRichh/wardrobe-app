const UserReviewCard = ({ user }) => {

  return (
    <div className="w-full px-2 m-2 rounded text-black backdrop-blur text-center h-full relative flex items-center justify-center flex-wrap max-h-96">
      <div className="flex flex-col items-center justify-center w-60">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="aspect-square rounded-full object-cover pb-2"
        />
        <h1 className="pb-2 px-1 text-2xl font-bold">{user.name}</h1>
        <h2 className="pb-2 px-1 text-lg">{user.username}</h2>
      </div>
      <div className="flex items-center justify-center h-full  w-2/3">
        <h2 className="pb-2 text-lg font-bold">{user.description}</h2>
      </div>
    </div>
  );
};

export default UserReviewCard;
