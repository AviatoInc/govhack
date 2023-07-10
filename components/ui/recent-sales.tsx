import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://avatar.vercel.sh/864650.png`} alt="Avatar" />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Education</p>
          <p className="text-sm text-muted-foreground">
            Educational Scheme
          </p>
        </div>
        <div className="ml-auto font-medium">+1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src={`https://avatar.vercel.sh/132959.png`} alt="Avatar" />
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Health</p>
          <p className="text-sm text-muted-foreground">Health Scheme</p>
        </div>
        <div className="ml-auto font-medium">+39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://avatar.vercel.sh/162123.png`} alt="Avatar" />
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">District Sports</p>
          <p className="text-sm text-muted-foreground">
            Disctrict Sports Scheme
          </p>
        </div>
        <div className="ml-auto font-medium">+299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://avatar.vercel.sh/858860.png`} alt="Avatar" />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Excise</p>
          <p className="text-sm text-muted-foreground">Excise Scheme</p>
        </div>
        <div className="ml-auto font-medium">+99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={`https://avatar.vercel.sh/693627.png`} alt="Avatar" />
          <AvatarFallback>PW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Public Works</p>
          <p className="text-sm text-muted-foreground">Public Works Scheme</p>
        </div>
        <div className="ml-auto font-medium">+39.00</div>
      </div>
    </div>
  );
}
