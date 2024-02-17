import { Avatar, AvatarFallback } from "../Avatar";
import { Badge } from "../Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Card";
import { teamMembers } from "./data";
import {
  formatAvailableTime,
  getAvatarFallback,
  isMemberAvailable,
} from "./utils";

function BadgeAvailable() {
  return (
    <Badge className="justify-center w-[80px]" variant="default">
      Available
    </Badge>
  );
}

function BadgeUnavailable() {
  return (
    <Badge className="justify-center w-[80px]" variant="secondary">
      Offline
    </Badge>
  );
}

export function TeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Connect with our team members for support.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {teamMembers.map(({ id, name, email, available }) => {
          const { startTime, endTime } = available;

          return (
            <div
              key={id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>{getAvatarFallback(name)}</AvatarFallback>
                </Avatar>
                <div className="grid">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {email}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex flex-col items-center space-y-1">
                {isMemberAvailable(available) ? (
                  <BadgeAvailable />
                ) : (
                  <BadgeUnavailable />
                )}
                <p className="text-xs text-muted-foreground">
                  {formatAvailableTime(available)}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
