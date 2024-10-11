import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { LockClosedIcon } from "@radix-ui/react-icons";

export function PrivacyCard() {
	return (
		<div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
			{
				// <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
				// <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
				// <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
				// <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
			}
			<EvervaultCard icon={LockClosedIcon} />
		</div>
	);
}
