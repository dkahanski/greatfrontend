import { createFileRoute } from "@tanstack/react-router";
import type { FunctionComponent } from "../../common/types";
import StarIcon from "../../shared/icons/StarIcon";
import Button from "../../shared/ui/button/Button";

const ButtonsPage = (): FunctionComponent => {
	return (
		<div className="flex flex-col items-center bg-white py-28 px-6 md:px-8">
			<div className="flex flex-col gap-12">
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="filled">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon size={20} />} size="lg" variant="filled">
						Button CTA
					</Button>
					<Button iconRight={<StarIcon size={20} />} size="xl" variant="filled">
						Button CTA
					</Button>
					<Button size="2xl" variant="filled">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="filled" />
				</div>
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="outlined">
						Button CTA
					</Button>
					<Button
						iconLeft={<StarIcon size={20} />}
						size="lg"
						variant="outlined"
					>
						Button CTA
					</Button>
					<Button
						iconRight={<StarIcon size={20} />}
						size="xl"
						variant="outlined"
					>
						Button CTA
					</Button>
					<Button size="2xl" variant="outlined">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="outlined" />
				</div>
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="ghost">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon size={20} />} size="lg" variant="ghost">
						Button CTA
					</Button>
					<Button iconRight={<StarIcon size={20} />} size="xl" variant="ghost">
						Button CTA
					</Button>
					<Button size="2xl" variant="ghost">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="ghost" />
				</div>
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="link">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon size={20} />} size="lg" variant="link">
						Button CTA
					</Button>
					<Button iconRight={<StarIcon size={20} />} size="xl" variant="link">
						Button CTA
					</Button>
					<Button size="2xl" variant="link">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="link" />
				</div>
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="link.grey">
						Button CTA
					</Button>
					<Button
						iconLeft={<StarIcon size={20} />}
						size="lg"
						variant="link.grey"
					>
						Button CTA
					</Button>
					<Button
						iconRight={<StarIcon size={20} />}
						size="xl"
						variant="link.grey"
					>
						Button CTA
					</Button>
					<Button size="2xl" variant="link.grey">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="link.grey" />
				</div>
				<div className="flex items-center gap-5 flex-wrap">
					<Button size="md" variant="destructive">
						Button CTA
					</Button>
					<Button
						iconLeft={<StarIcon size={20} />}
						size="lg"
						variant="destructive"
					>
						Button CTA
					</Button>
					<Button
						iconRight={<StarIcon size={20} />}
						size="xl"
						variant="destructive"
					>
						Button CTA
					</Button>
					<Button size="2xl" variant="destructive">
						Button CTA
					</Button>
					<Button iconLeft={<StarIcon />} size="2xl" variant="destructive" />
				</div>
			</div>
		</div>
	);
};

export const Route = createFileRoute("/components/buttons")({
	component: ButtonsPage,
});
