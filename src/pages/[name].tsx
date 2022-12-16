import { useRouter } from "next/router";
import React from "react";
import { Timeline } from "../components/Timeline";

function UserPage() {
  const router = useRouter();

  const name = router.query.name as string;
  return (
    <div>
      <Timeline
        where={{
          author: {
            name,
          },
        }}
      />
    </div>
  );
}

export default UserPage;
