import AuthProvider from "@/components/partials/provider/AuthProvider";
import ProfileSidebar from "@/components/templates/profile";

export default function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <main className="max-w-7xl mx-auto my-10 flex flex-col-reverse lg:flex-row gap-6">
        <ProfileSidebar />

        <section className="flex-1">{children}</section>
      </main>
    </AuthProvider>
  );
}
