import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix</h1>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        Logout!
      </button>
    </>
  );
}
