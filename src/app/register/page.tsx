// login component
"use client";
import {
	BreadcrumbItem,
	Breadcrumbs,
	Button,
	Input,
	Select,
	SelectItem,
	Switch,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { registrationSchema } from "./validators/registrationSchema";
import { toast } from "react-toastify";
import { Alert } from "flowbite-react";
export default function Register() {
	const searchParams = useSearchParams();
	const pkg = searchParams.get("pkg");
	const [packageName, setPackageName] = useState("");
	const [showNotification, setShowNotification] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			packageName: pkg || "",
			privacyPolicy: false,
			fullName: "",
			companyName: "",
			companyEmail: "",
			phoneNumber: "",
		},
	});

	useEffect(() => {
		if (pkg) {
			setPackageName(pkg);
			setValue("packageName", pkg);
		}
	}, [pkg, setValue]);

	const onSubmit = async (data: any) => {
		setShowNotification(false);

		const result = registrationSchema.safeParse(data);

		if (result.success) {
			try {
				const response = await fetch("/api/send-email/apply", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});
				const returnedData = await response.json();

				if (response.ok) {
					setShowNotification(true);
					toast.success(
						"Thank you for registering! Someone will contact you shortly to discuss the next steps.",
						{
							position: "top-right",
							className: "w-[350px] ",
						}
					);
					reset();
				} else {
					toast.error(
						"There was an error submitting your registration. Please try again."
					);
				}

				reset();
			} catch (error) {
				toast.error(
					"There was an error submitting your registration. Please try again."
				);
			}
		}
		// handle form submission
	};
	return (
		<section className="h-full w-full bg-foreground  min-h-screen">
			<div className="container h-full p-10 mx-auto">
				<div className=" flex h-full  flex-wrap items-center justify-center text-neutral-800 dark:text-light">
					<div className="w-full">
						<Breadcrumbs color="primary" classNames={{}}>
							<BreadcrumbItem>
								<a href={`/`}>Home</a>
							</BreadcrumbItem>
							<BreadcrumbItem>Register </BreadcrumbItem>
						</Breadcrumbs>
						<div className="block rounded-lg  bg-white shadow-xl dark:bg-neutral-800">
							<div className=" lg:flex lg:flex-wrap ">
								<motion.div
									initial={{ opacity: 0, y: -250 }}
									whileInView={{
										opacity: 1,
										y: 0,
										transition: { duration: 1 },
									}}
									className="px-4 md:px-0 lg:w-6/12  rounded"
								>
									<div className="md:mx-6 p-5">
										<div className="text-center">
											<Image
												loading="eager"
												width={200}
												height={200}
												className="mx-auto w-48 h-[200px] object-contain"
												src="/images/Logo_without_text.png"
												alt="logo"
											/>
										</div>

										<form
											className="flex flex-col gap-y-3 text-background capitalize"
											onSubmit={handleSubmit(onSubmit)}
										>
											<p>Please Apply here & Select a Package</p>

											<Input
												type="text"
												label="Full Name"
												placeholder="Enter your full name"
												className=""
												variant="bordered"
												{...register("fullName")}
												classNames={{
													input:
														"text-small bg-background text-foreground focus:outline-none border-transparent focus:border-transparent focus:ring-0 ",
													label: "text-xs text-black hover:text-xs pb-2",
													inputWrapper:
														"bg-background focus:bg-background hover:bg-background border-background hover:border-background h-[70px] labtext-background p-2",
												}}
											/>
											{errors.fullName && (
												<span className="text-red-500 text-xs">
													{errors.fullName.message?.toString()}
												</span>
											)}

											<Input
												type="text"
												label="Company Name"
												placeholder="Enter your company name"
												variant="bordered"
												{...register("companyName")}
												classNames={{
													input:
														"text-small bg-background text-foreground focus:outline-none border-transparent focus:border-transparent focus:ring-0 ",
													label: "text-xs text-black hover:text-xs pb-2",
													inputWrapper:
														"bg-background focus:bg-background hover:bg-background border-background hover:border-background min-h-[70px] labtext-background p-2",
												}}
											/>
											{errors.companyName && (
												<span className="text-red-500 text-xs">
													{errors.companyName.message?.toString()}
												</span>
											)}

											<Input
												type="email"
												label="Company Email"
												placeholder="Enter your company email"
												variant="bordered"
												{...register("companyEmail")}
												classNames={{
													input:
														"text-small bg-background text-foreground focus:outline-none border-transparent focus:border-transparent focus:ring-0 ",
													label: "text-xs text-black hover:text-xs pb-2",
													inputWrapper:
														"bg-background focus:bg-background hover:bg-background border-background hover:border-background min-h-[70px] labtext-background p-2",
												}}
											/>
											{errors.companyEmail && (
												<span className="text-red-500 text-xs">
													{errors.companyEmail.message?.toString()}
												</span>
											)}

											<Input
												type="tel"
												label="Phone Number (Optional)"
												placeholder="Enter your phone number"
												variant="bordered"
												{...register("phoneNumber")}
												classNames={{
													input:
														"text-small bg-background text-foreground focus:outline-none border-transparent focus:border-transparent focus:ring-0 ",
													label: "text-xs text-black hover:text-xs pb-2",
													inputWrapper:
														"bg-background focus:bg-background hover:bg-background border-background hover:border-background min-h-[70px] labtext-background p-2",
												}}
											/>

											<Select
												label="Select A Package"
												// value={packageName}
												className="w-full min-h-[70px] text-foreground"
												classNames={{
													label: "text-xs text-foreground hover:text-xs pb-2",

													trigger: "min-h-[70px] bg-background",
													innerWrapper: "p-2",
												}}
												{...register("packageName")}
											>
												<SelectItem
													className="text-foreground"
													key={"DEVELOPMENT"}
													value={"DEVELOPMENT"}
												>
													DEVELOPMENT 499€
												</SelectItem>
												<SelectItem
													className="text-foreground"
													key={"TRANSITION"}
													value={"TRANSITION"}
												>
													TRANSITION 799€
												</SelectItem>
												<SelectItem
													className="text-foreground"
													key={"INTEGRATED"}
													value={"INTEGRATED"}
												>
													INTEGRATED 1299€
												</SelectItem>
												<SelectItem
													className="text-foreground"
													key={"LEADER"}
													value={"LEADER"}
												>
													LEADER 2500€
												</SelectItem>
												<SelectItem
													className="text-foreground"
													key={"PREMIUM"}
													value={"PREMIUM"}
												>
													PREMIUM 5000€
												</SelectItem>
												<SelectItem
													className="text-foreground"
													key={"GLOBAL"}
													value={"GLOBAL"}
												>
													GLOBAL 10000€
												</SelectItem>
											</Select>
											{errors.packageName && (
												<span className="text-red-500 text-xs">
													{errors.packageName.message?.toString()}
												</span>
											)}

											<div className="flex relative flex-row shrink-0 justify-start max-sm:justify-start my-3 gap-5 items-center">
												<Switch
													className="h-[20px]"
													color="warning"
													required
													defaultChecked={false}
													{...register("privacyPolicy")}
													onChange={(e) => {
														setValue("privacyPolicy", e.currentTarget.checked);
													}}
												></Switch>
												<div className="relative shrink-0 h-auto text-sm h-[20px]">
													I agree to the Privacy Policy
													<br />
												</div>
											</div>
											{errors.privacyPolicy && (
												<span className="text-red-500 text-xs">
													{errors.privacyPolicy.message?.toString()}
												</span>
											)}

											<div className="mb-12 pb-1 pt-1 text-center">
												<Button
													className="border-2 bg-background text-foreground rounded-lg mb-3 h-[50px] inline-block w-full px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal"
													type="submit"
												>
													Apply
												</Button>

												<Alert color="success" className="text-xs">
													In applying, you submit an expression of interest for participating
													at the desired package category only. We will contact applicants
													provisionally accepted within 5 work days of application with
													further details regarding seat reservation.
												</Alert>
											</div>
										</form>
									</div>
								</motion.div>

								<div className="flex items-center bg-background text-foreground   lg:w-6/12 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none ">
									<div className="px-4 py-6 md:mx-6 md:p-12">
										<motion.h4
											initial={{ opacity: 0, y: 250 }}
											whileInView={{
												opacity: 1,
												y: 0,
												transition: { duration: 0.5 },
											}}
											className="mb-6 text-4xl font-semibold"
										>
											MEET NEW CLIENTS WHILE LEARNING HOW TO ATTRACT MODERN IMPACT-DRIVEN
											PROFESSIONALS TO YOUR FIRM
										</motion.h4>
										<motion.div
											initial={{ opacity: 0, y: 250 }}
											whileInView={{
												opacity: 1,
												y: 0,
												transition: { duration: 1 },
											}}
											className="text-sm flex flex-col gap-4"
										>
											<p>
												To ensure the maximum amount of networking and partnership
												opportunities, we are offering participation in our exclusive
												Kickoff event on 25. October to just 25 B2B partners. In a
												round-table insight and exchange format, selected guests and
												sponsors will receive the tools to find, recruit and retain
												impact-driven staff from a carefully selected group of experts.
											</p>
											<p>
												With the knowledge of innovative and modern sourcing methods, global
												talent pipelines and human-centric retention processes, attendees
												will be able to make the most of our international Green Energy
												Career Day planned for summer 2025. That&apos;s where we&apos;ll be
												partnering with international universities, media outlets, trade
												schools, associations and organisations to bring up to 2000
												jobseekers ready to power the green transition to our corporate
												guests.{" "}
											</p>
											<p>
												Get ready for matchmaking interviews & specialised insight into the
												skills required to make a more cohesive food, energy and water nexus
											</p>
										</motion.div>
									</div>
									{/* <div className="h-full ">
										<Image
											loading="eager"
											width={750}
											height={750}
											src="/images/HiddenBerlin.png"
											alt="Card background"
											className="w-full h-full object-cover rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none"
										/>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
