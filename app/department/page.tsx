import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/app/department/profile-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Schemes</h3>
        <p className="text-sm text-muted-foreground">
          Update your Scheme datas here.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}