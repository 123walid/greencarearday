"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const ImprintPage = () => {
	return (
		<div
			id="location"
			className="min-h-screen h-full py-[50px] xl:w-5/6 w-full px-5 gap-10 bg-background text-foreground flex flex-col items-center"
		>
			<Breadcrumbs className="place-self-start">
				<BreadcrumbItem>
					<a href={`/`}>Home</a>
				</BreadcrumbItem>
				<BreadcrumbItem>Imprint</BreadcrumbItem>
			</Breadcrumbs>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center"
			>
				<h1 className="uppercase text-5xl font-extrabold mb-3">Imprint</h1>
				<p className="uppercase text-sm font-extrabold">
					The imprint also applies to the social media profiles of
					greentech.training.
				</p>
			</motion.div>

			<IoIosArrowDown size={50} />
			<div className="grid grid-cols-1 max-lg:gap-10 w-full h-full gap-5 my-10">
				<div className="grid grid-cols-1 gap-5 ">
					<div className="md:text-sm lg:text-md ">
						greentech.training <br /> Represented by Jerome Goerke <br /> Goerzallee
						299 14167 Berlin Zehlendorf <br />
						T: +49 (0)30 33 85 84 80 <br />
						info@greentech.training <br />
						www.greentech.training <br /> Identification number according to §27a
						UStG-Id.Nr.: DE253336600 <br /> Managing Director and responsible for the
						content: Jerome Goerke <br /> Implementation & design: greentech.training
					</div>
					<div className="text-2xl text-focus lg:text-4xl ">
						Experience Berlin&apos;s Iconic Transformation: An Exclusive Networking
						Event at Peter Behrens Bau
					</div>
					<div className="text-lg mb-3 text-focus">General Information</div>
					<div className="md:text-sm lg:text-md ">
						The following notices provide a simple overview of what happens to your
						personal data when you visit this website. <br />
					</div>
					<div className="md:text-sm lg:text-md ">
						Personal data is any data by which you can be personally identified. The
						privacy policy provides more detailed information on data protection.
					</div>
					<div className="text-lg mb-3 text-focus">
						Data collection on this website.
					</div>
					<div className="md:text-sm lg:text-md ">
						Who is responsible for data collection on this website? Data processing on
						this website is carried out by the website operator.
					</div>
					<div className="md:text-sm lg:text-md ">
						You can find the contact details of the website operator in the section
						&quot;Information on the data controller&quot; below.
					</div>
					<div className="text-lg mb-3 text-focus">
						What do we use your data for?
					</div>
					<div className="md:text-sm lg:text-md ">
						Some of the data is collected in order to ensure error-free provision of
						the website. Other data may be used to analyse your user behaviour, or to
						contact you.
					</div>
					<div className="text-lg mb-3 text-focus">
						What rights do you have regarding your data?
					</div>
					<div className="md:text-sm lg:text-md ">
						You have the right at any time to receive information free of charge about
						the origin, recipient and purpose of your stored personal data. You also
						have the right to request the correction or deletion of this data. If you
						have given your consent to data processing, you can revoke this consent at
						any time for the future. You also have the right to request the
						restriction of the processing of your personal data under certain
						circumstances. Furthermore, you have the right to lodge a complaint with
						the competent supervisory authority.
					</div>
					<div className="md:text-sm lg:text-md ">
						You can contact us at any time about this and any other questions you may
						have on the subject of data protection.
					</div>
					<div className="text-lg mb-3 text-focus">
						Analysis tools and third-party tools
					</div>
					<div className="md:text-sm lg:text-md ">
						When visiting this website, your surfing behaviour may be statistically
						analysed. This is mainly done with so-called analysis programmes.
					</div>
					<div className="md:text-sm lg:text-md ">
						Detailed information on these analysis programmes can be found below.
					</div>
				</div>
				<div className="grid grid-cols-1 gap-5">
					<div className="text-lg mb-3 text-focus">Hosting</div>
					<div className="md:text-sm lg:text-md ">
						We host our website with Strato. The provider is Strato AG,
						Otto-Ostrowski-Straße 7, 10249 Berlin (hereinafter &quot;Strato&quot;).
						When you visit our website, Strato collects various log files including
						your IP addresses.
						<br />
						<br />
						For more information, please refer to Strato&apos;s privacy policy:{" "}
						<a
							href="https://www.strato.de/datenschutz/"
							target="_blank"
							className="text-blue-600 underline"
						>
							https://www.strato.de/datenschutz/
						</a>
						.
						<br />
						<br />
						The use of Strato is based on Art. 6 para. 1 lit. f DSGVO. We have a
						legitimate interest in ensuring that our website is presented as reliably
						as possible. If a corresponding consent has been requested, the processing
						is carried out exclusively on the basis of Art. 6 para. 1 lit. a DSGVO and
						§ 25 para. 1 TTDSG, insofar as the consent includes the storage of cookies
						or access to information in your terminal device (e.g. device
						fingerprinting) as defined by the TTDSG. The consent can be revoked at any
						time.
					</div>
					<div className="text-lg mb-3 text-focus">Data protection</div>
					<div className="md:text-sm lg:text-md ">
						The operators of these pages take the protection of your personal data
						very seriously. We treat your personal data confidentially and in
						accordance with the statutory data protection regulations and this data
						protection declaration.
						<br />
						<br />
						When you use this website, various personal data are collected. Personal
						data is data by which you can be personally identified. This privacy
						policy explains what information we collect and how we use it. It also
						explains how and for what purpose this is done.
						<br />
						<br />
						We would like to point out that data transmission on the Internet (e.g.
						when communicating by e-mail) can have security gaps. Complete protection
						of data against access by third parties is not possible.
					</div>
					<div className="text-lg mb-3 text-focus">
						The responsible party for data processing on this website is:
					</div>
					<div className="md:text-sm lg:text-md ">
						greentech.training
						<br /> Represented by Jerome Goerke
						<br /> Telephone: +49 (0)30 33 85 84 80
						<br /> E-mail: info@greentech.training
						<br /> The data controller is the natural or legal person who alone or
						jointly with others determines the purposes and means of the processing of
						personal data (e.g. names, e-mail addresses, etc.).
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">Storage & Processing</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								Unless a more specific storage period has been specified within this
								privacy policy, your personal data will remain with us until the purpose
								for processing the data no longer applies. If you assert a legitimate
								request for deletion or revoke consent to data processing, your data
								will be deleted unless we have other legally permissible reasons for
								storing your personal data (e.g. retention periods under tax or
								commercial law); in the latter case, the data will be deleted once these
								reasons no longer apply.
							</p>

							<p>
								If you have consented to data processing, we process your personal data
								on the basis of Art. 6 para. 1 lit. a DSGVO or Art. 9 para. 2 lit. a
								DSGVO if special categories of data are processed in accordance with
								Art. 9 para. 1 DSGVO. In the event of express consent to the transfer of
								personal data to third countries, data processing is also carried out on
								the basis of Art. 49 para. 1 lit. a DSGVO.
							</p>

							<p>
								If you have consented to the storage of cookies or to the access to
								information in your terminal device (e.g. via device fingerprinting),
								the data processing is additionally carried out on the basis of Section
								25 (1) TTDSG. This consent can be revoked at any time.
							</p>

							<p>
								If your data is required for the performance of a contract or for the
								implementation of pre-contractual measures, we process your data on the
								basis of Art. 6 para. 1 lit. b DSGVO. Furthermore, if your data is
								required for the fulfilment of a legal obligation, we process it on the
								basis of Art. 6 para. 1 lit. c DSGVO. The data processing may be carried
								out on the basis of our legitimate interest according to Art. 6 para. 1
								lit. f DSGVO. Information on the relevant legal basis in each individual
								case is provided in the following paragraphs of this data protection
								declaration.
							</p>

							<p>
								For evidentiary purposes, we must retain contractual data for three
								years from the end of the year in which the business relationship with
								you ends. Any claims become statute-barred at this point at the earliest
								in accordance with the standard statutory limitation period.
							</p>

							<p>
								Even after this, we still have to store some of your data for accounting
								reasons. We are obliged to do so because of legal documentation
								obligations that may arise from the German Commercial Code, the German
								Fiscal Code, the German Banking Act and the German Money Laundering Act.
								The periods specified there for the retention of documents are two to
								ten years.
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">
							Data transmitted as part of an application
						</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								You can apply for advertised vacancies or solicit your interest in
								acquiring staff by e-mail or via our contact form. The purpose of the
								data collection is the selection of applicants for the possible
								establishment of an employment relationship with partner companies. In
								order to process applications from partner companies and applicants, we
								collect the data provided by you (usually in the first instance name and
								e-mail address; and in the second instance application documents such as
								certificates and CV). Other data collected may include date of earliest
								possible job start; channel through which one became aware of our
								service or job advertisement; telephone number, salary requirements,
								LinkedIn profile, etc. We would like to point out that confidentiality
								cannot be guaranteed if applications are sent by e-mail without
								encryption.
							</p>

							<p>
								Your application data is stored in Germany via our secure server with
								Strato. The legal basis for the processing of your application documents
								is Art. 6 para. 1 lit. b and Art. 88 para. 1 DSGVO in conjunction with §
								26 para. 1 p. 1 BDSG.
							</p>

							<p>
								We store your personal data upon receipt of your application. If we
								accept your application, we store your application data for as long as
								it is required for the employment relationship and to the extent that
								legal regulations justify an obligation to store it.
							</p>

							<p>
								If we reject your application, we will store your application data for a
								maximum of three months after rejecting your application, unless you
								give us your consent to store it for a longer period. If you have given
								us your consent separately, we will store your data submitted as part of
								the application in our pool of applicants for a further twelve months
								after the end of the application process in order to identify any other
								positions that may be of interest to you and to approach you again if
								necessary. After this period, the data will be deleted. You can revoke
								this consent for the future at any time by sending us an email to
								info@greentech.training.
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">Data protection officer</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>We have appointed a data protection officer for our company:</p>
							<p>Jerome Goerke</p>
							<p>
								E-mail:{" "}
								<a href="mailto:info@greentech.training">info@greentech.training</a>
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">
							Online presence in social networks
						</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								We maintain an online presence in social networks in order to
								communicate with interested parties and to inform them about our
								services:
							</p>
							<p>
								LinkedIn Company Page of LinkedIn Ireland Unlimited Company Wilton
								Place, Dublin 2, Ireland (&quot;LinkedIn&quot;)
							</p>
							<p>
								As part of the operation of our online presences on social networks, it
								is possible that we may access information such as statistics on the use
								of our online presences provided by the operator of the social network.
								These statistics are aggregated and may include, in particular,
								demographic information (e.g. age, gender, region, country),
								employment-related information (e.g. job, function, industry, work
								experience, company size) as well as data on interaction with our online
								presence (e.g. likes, shares, subscriptions, viewing of images and
								videos) and the posts and content distributed via it. This may also
								provide information about users&apos;interests and which content and
								topics are particularly relevant to them. This information can also be
								used by us to adapt the design and our activities and content on the
								online presences and to optimise them for our audience. The collection
								and use of these statistics is subject to joint responsibility with the
								social network operator.
							</p>
							<p>
								For more information on joint accountability, the nature and scope of
								these statistics and how to contact the social network, please see:
							</p>
							<p>
								LinkedIn: Page Insights Joint Controller Addendum (the
								&quot;Addendum&quot;).
							</p>
							<p>
								The legal basis for this data processing is Art. 6 para. 1 lit. b DSGVO,
								in order to stay in contact with our customers and to inform them, as
								well as for the implementation of pre-contractual measures with
								interested parties, and 6 para. 1 lit. f DSGVO, based on our legitimate
								interest in effective information and communication with users.
							</p>
							<p>
								We have no influence on data that is processed by the social network
								under its own responsibility in accordance with the terms of use.
								However, we would like to point out that data about your usage behaviour
								may be transmitted to the operator of the social network when you visit
								the online presences. The operators of the social networks may process
								the aforementioned information to compile more detailed statistics and
								for their own market research and advertising purposes, over which we
								have no influence. For this purpose, cookies and other identifiers are
								stored on the computers of the persons concerned. On the basis of these
								usage profiles, advertisements are then placed within the social
								network, for example, but also on third-party websites. You can find
								more information on this in the data protection notices of the social
								networks:
							</p>
							<p>LinkedIn</p>
							<p>
								Insofar as we receive your personal data when operating the online
								presence in the social networks, you are entitled to the rights stated
								in this data protection declaration.
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">
							Online meetings via Google Meet
						</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								We use &quot;Google Meet&quot; to conduct online meetings, conference
								calls and/or webinars (collectively, &qoutes;Meetings&qoutes;). Meet is
								software from Google LLC 1600 Amphitheatre Parkway, Mountain View,
								California, U.S. (&quot;Google&quot;), which is available as a desktop,
								web and mobile app. It is used by us in particular to run the digital
								consultation hours and webinars.
							</p>
							<p>
								The legal basis for the processing of data to conduct meetings via
								Google Meet is our legitimate interest in the effective and simple
								conduct of online meetings, discussion rounds and presentations pursuant
								to Art. 6 (1) lit. f DSGVO. Insofar as the meetings are conducted within
								the framework of existing contractual relationships with you, the legal
								basis is Art. 6 para. 1 lit. b DSGVO. We are not responsible for any
								further data processing on the Meet product website, where the desktop
								software can be downloaded and the web app can be used.
							</p>
							<p>
								During a meeting, the following data may be processed under certain
								circumstances:
							</p>
							<ul>
								<li>
									Participant details: display name, if applicable, first name, last
									name, phone, email address, password (encrypted for authentication),
									profile picture;
								</li>
								<li>
									Metadata: Meeting topic and description, IP address, participant&apos;s
									phone number, type of device/software
									(Windows/Mac/Linux/Web/iOS/Android Phone/Windows Phone), time of
									participant&apos;s last activity on Teams, number of chat and channel
									messages, number of meetings attended, duration of audio, video and
									screen sharing time;
								</li>
								<li>
									For chat, or channel message usage: text data for display and logging,
									if applicable;
								</li>
								<li>For audio use: microphone recording data;</li>
								<li>For video use: recording data from the video camera;</li>
								<li>
									For recordings: Audio, video and screen sharing for storage in the
									cloud
								</li>
								<li>
									For phone use: incoming and outgoing phone numbers, country name, start
									and end time, possibly other connection data such as the IP address of
									the device.
								</li>
							</ul>
							<p>
								Before a meeting, you register via our website contact form or by
								e-mail. Your registration data will be processed by us. Before the
								meeting, you will receive a confirmation e-mail with an invitation link
								or a calendar date.
							</p>
							<p>
								To participate in a meeting, you must at least provide details of your
								name and - in the case of telephone use - your telephone number, unless
								we allow anonymous participation in meetings. In the latter case, we
								will inform you of this possibility of anonymous participation in the
								course of the invitation. You can deactivate the transmission via
								microphone and camera at any time via the corresponding settings. We
								only record meetings or log text data with your consent and prior
								notification. Google stores and uses the metadata to enable us to
								analyse and report on the use of Google Meet.
							</p>
							<p>
								Google may become aware of the above data as part of its contract
								processing in order to process it. All data traffic is encrypted (DTLS,
								SRTP). Google&apos;s compliance protocols related to EU laws can be
								viewed at their Compliance Page.
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">Passing on of data</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>The data collected by us will only be passed on if:</p>
							<ol className="list-decimal pl-6">
								<li>
									you have given your express consent in accordance with Art. 6 Para. 1
									lit. a DSGVO,
								</li>
								<li>
									the disclosure is necessary for the assertion, exercise or defence of
									legal claims in accordance with Art. 6 para. 1 lit. f DSGVO and there
									is no reason to assume that you have an overriding interest worthy of
									protection in not having your data disclosed,
								</li>
								<li>
									we are legally obliged to disclose your data according to Art. 6 para.
									1 lit. c DSGVO or
								</li>
								<li>
									this is legally permissible and necessary according to Art. 6 para. 1
									lit. b DSGVO for the processing of contractual relationships with you
									or for the implementation of pre-contractual measures that take place
									at your request.
								</li>
							</ol>
							<p>
								Part of the data processing may be carried out by our service providers.
								In addition to the service providers mentioned in this privacy policy,
								this may include, in particular, data centres that store our website and
								databases, IT service providers that maintain our systems, consulting
								companies and partners. If we pass on data to our service providers,
								they may only use the data to fulfil their tasks. The service providers
								have been carefully selected and commissioned by us. They are
								contractually bound to our instructions, have suitable technical and
								organisational measures in place to protect the rights of the data
								subjects and are regularly monitored by us.
							</p>
							<p>
								In addition, data may be disclosed in connection with official
								enquiries, court orders and legal proceedings if this is necessary for
								legal prosecution or enforcement.
							</p>
						</div>
					</div>

					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">
							Data transfer to third countries
						</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								As explained in this privacy policy, we use services whose providers are
								partly located in so-called third countries (such as the USA), i.e.
								countries whose level of data protection does not correspond to that of
								the European Union. Where this is the case and the European Commission
								has not issued an adequacy decision (Art. 45 GDPR) for these countries,
								we have taken appropriate precautions to ensure an adequate level of
								data protection for any data transfers. These include, among others, the
								standard contractual clauses of the European Union or binding internal
								data protection regulations.
							</p>
							<p>
								Where this is not possible, we base the transfer of data on exceptions
								to Art. 49 DSGVO, in particular your express consent or the necessity of
								the transfer for the performance of the contract.
							</p>
							<p>
								If a third country transfer is provided for and no adequacy decision or
								appropriate safeguards are in place, it is possible and there is a risk
								that authorities in the respective third country (e.g. intelligence
								services) may gain access to the transferred data in order to collect
								and analyse it and that enforceability of your data subject rights
								cannot be guaranteed. When obtaining your consent via the consent
								banner, you will also be informed of this.
							</p>
						</div>
					</div>
					<div className="mb-6">
						<div className="text-lg mb-3 text-focus">Your Rights</div>
						<div className="md:text-sm lg:text-md flex flex-col gap-3">
							<p>
								You have the right to request information about the processing of your
								personal data by us at any time. When you request information, we will
								explain the data processing to you and provide you with an overview of
								the data stored about you. If any data stored by us is incorrect or no
								longer up to date, you have the right to have this data corrected. You
								can also request the deletion of your data. If deletion is exceptionally
								not possible due to other legal provisions, the data will be blocked so
								that it is only available for this legal purpose. You can also have the
								processing of your data restricted, e.g. if you believe that the data we
								hold is incorrect. You also have the right to data portability, which
								means that we will provide you with a digital copy of the personal data
								you have provided to us if you request it.
							</p>
							<p>
								To exercise your rights as described here, you can contact us at any
								time using the contact details above. This also applies if you wish to
								receive copies of guarantees demonstrating an adequate level of data
								protection. Provided that the respective legal requirements are met, we
								will comply with your data protection request.
							</p>
							<p>
								Your enquiries regarding the assertion of data subject rights and our
								responses to them will be stored for documentation purposes for a period
								of up to three years and, in individual cases, for longer if there is
								cause to assert, exercise or defend legal claims. The legal basis is
								Art. 6 para. 1 sentence 1 lit. f DSGVO, based on our interest in
								defending against any civil claims under Art. 82 DSGVO, avoiding fines
								under Art. 83 DSGVO and fulfilling our accountability obligations under
								Art. 5 para. 2 DSGVO.
							</p>
							<p>
								Finally, you have the right to complain to a data protection supervisory
								authority. For example, you can assert this right at a supervisory
								authority in the member state of your residence, workplace or the
								location of the alleged infringement. In Berlin the competent
								supervisory authority is: Berlin Commissioner for Data Protection and
								Freedom of Information, Alt-Moabit 59-61, 10555 Berlin.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImprintPage;
