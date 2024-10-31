// pages/api/send-email.ts
import transporter from "../CustomTransporter";
import { logger } from "../../logger";
export async function POST(req: Request) {
	const body = await req.json();
	const {
		fullName,
		companyName,
		companyEmail,
		phoneNumber = "",
		packageName,
	} = body;
	try {
		await transporter.sendMail({
			from: {
				address: companyEmail,
				name: companyEmail,
			},
			sender: { address: companyEmail, name: companyEmail },
			to: process.env.SMTP_TO,
			subject: "Green Day Event Application",
			html: EmailTemplate(
				fullName,
				companyName,
				companyEmail,
				phoneNumber,
				packageName
			),
		});
		return Response.json({ message: "Email sent successfully" }, { status: 200 });
	} catch (error) {
		return Response.json(
			{
				message: "Error sending email",
			},
			{ status: 500 }
		);
	}
}

const EmailTemplate = (
	fullName: string,
	companyName: string,
	companyEmail: string,
	phoneNumber: string,
	packageName: string
) => `
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://cdn.tailwindcss.com"></script>
	</head>
	<body>
		<div class="font-[sans-serif] p-5">
			<div class="w-full h-full mx-auto flex flex-col justify-center">
				<h2 class="text-gray-800 text-4xl text-center font-extrabold">
					Green Day Event Application
				</h2>
				<div class="flex justify-around basis-full gap-6 justify-center mt-12">
					<div class="border-2 text-[#17171b] w-full rounded-lg p-6 transition-all">
						<div class="lg:min-h-[250px] flex justify-center items-center">
							<img
								src="https://greendayevent.netlify.app/_next/image?url=%2Fimages%2FLogo_without_text.png&w=256&q=75"
								class="aspect-[4/3] inline-block"
								alt="Application Icon"
							/>
						</div>
						<div class="mt-6 w-full">
							<table class="w-full">
								<tbody>
									<tr>
										<td class="text-lg font-bold">Fullname:</td>
										<td class="text-sm">${fullName}</td>
									</tr>
									<tr>
										<td class="text-lg font-bold">CompanyName:</td>
										<td class="text-sm">${companyName}</td>
									</tr>
									<tr>
										<td class="text-lg font-bold">CompanyEmail:</td>
										<td class="text-sm">${companyEmail}</td>
									</tr>
									<tr>
										<td class="text-lg font-bold">PhoneNumber:</td>
										<td class="text-sm">${phoneNumber}</td>
									</tr>
									<tr>
										<td class="text-lg font-bold">Package:</td>
										<td class="text-sm">${packageName}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="https://cdn.tailwindcss.com"></script>
	</body>
</html>

`;
