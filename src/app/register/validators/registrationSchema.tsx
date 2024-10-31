import zod from "zod";

export const registrationSchema = zod.object({
	fullName: zod.string().min(3, "Full Name is required"),
	companyName: zod.string().min(3, "Company Name is required"),
	companyEmail: zod
		.string()
		.email("Invalid email address")
		.min(5, "Email is required"),
	phoneNumber: zod.string().optional(),
	packageName: zod.enum(
		["LEADER", "DEVELOPMENT", "TRANSITION", "INTEGRATED", "PREMIUM", "GLOBAL"],
		{
			message: "Choose a Package ",
		}
	),
	privacyPolicy: zod
		.boolean()
		.refine((val) => val === true, "You must agree to the Privacy Policy")
		.refine((val) => val === true, "You must agree to the Privacy Policy"),
});
