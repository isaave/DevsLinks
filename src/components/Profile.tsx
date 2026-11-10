import type { FC } from "react";

type ProfileProps = {
  avatar: string;
  name: string;
  bio?: string;
};

// Displays the user avatar, name and optional bio.
export const Profile: FC<ProfileProps> = ({ avatar, name, bio }) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <img
        src={avatar}
        alt={`Foto de perfil de ${name}`}
        className="h-28 w-28 rounded-full border-4 border-white/30 object-cover shadow-lg"
      />
      <p className="font-medium text-lg">@{name}</p>
      {bio && <p className="text-sm text-zinc-300 max-w-xs">{bio}</p>}
    </div>
  );
};
