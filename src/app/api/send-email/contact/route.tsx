// pages/api/send-email.ts
import transporter from "../CustomTransporter";
import { Resend } from 'resend';
import { NextResponse } from "next/server";
  
const resend = new Resend(process.env.API_KEY);

export async function POST(req:Request) {
	try {
	  // Parse JSON body from request
	  const body = await req.json();
	  const { firstName, lastName, email, phoneNumber, message } = body;
  
	  const { data, error } = await resend.emails.send({
		from: "Green Day <onboarding@resend.dev>",
		to: ["jerome.goerke@greentech.training"],
		subject: "Contact",
		html: EmailTemplate({ firstName, lastName, email, phoneNumber, message }),
	  });
  
	  if (error) {
		console.log(error)
		return NextResponse.json(error, { status: 400 });
		
	  }
	  console.log(data)
	  return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.log(error)
	  return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
  }

const EmailTemplate = (emailBody: {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
}) => `
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
				Green Day Event Contact
				</h2>
				<div class="flex justify-around basis-full gap-6 justify-center mt-12">
					<div
						class="border-2 text-[#17171b] w-full rounded-lg p-6 hover:scale-[1.03] transition-all"
					>
						<div class="lg:min-h-[250px] flex justify-center items-center">
							<img
								src="https://greendayevent.netlify.app/_next/image?url=%2Fimages%2FLogo_without_text.png&w=256&q=75"
								class="aspect-[4/3] inline-block"
								alt="Application Icon"
							/>
						</div>
						<table width="650px">
							<tbody>
								<tr>
									<td class="text-lg font-bold">FirstName:</td>
									<td class="">${emailBody.firstName}</td>
								</tr>
								<tr>
									<td class="text-lg font-bold">LastName:</td>
									<td class="">${emailBody.lastName}</td>
								</tr>
								<tr>
									<td class="text-lg font-bold">Email:</td>
									<td class="">${emailBody.email}</td>
								</tr>
								<tr>
									<td class="text-lg font-bold">PhoneNumber:</td>
									<td class="">${emailBody.phoneNumber}</td>
								</tr>
								<tr>
									<td class="text-lg font-bold">Message:</td>
									<textarea  cols="60" rows="10">${emailBody.message} </textarea>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
                <script src="https://cdn.tailwindcss.com"></script>
	</body>
</html>
`;
