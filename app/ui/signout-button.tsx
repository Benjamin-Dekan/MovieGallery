import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="rounded-full px-4 py-2 bg-white/10 backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition-colors active:scale-95 text-sm font-medium text-white"
      >
        Sign Out
      </button>
    </form>
  );
}
