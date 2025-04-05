import { useForm } from "react-hook-form";
import "./App.css";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	async function onSubmit(data) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
	}

	return (
		<>
			<h1 className="text-3xl font-bold underline mb-16">Hello world!</h1>

			<fieldset className="border-2 border-black p-4 rounded-2xl">
				<legend className="text-2xl font-bold">My First Form</legend>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col justify-center items-center"
				>
					<label htmlFor="username">Enter Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						className={`border-2 border-black rounded-lg m-2 ${
							errors.username ? "border-red-500" : ""
						}`}
						{...register("username", {
							required: true,
							minLength: {
								value: 3,
								message: "username must be at least 3 character",
							},
							maxLength: {
								value: 20,
								message: "username must less than 20 character",
							},
						})}
					/>
					{errors.username && (
						<p className="text-red-500">username is required!</p>
					)}
					<br />
					<label htmlFor="email">Enter Email ID:</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="email@example.com"
						className={`border-2 border-black rounded-lg m-2 ${
							errors.email ? "border-red-500" : ""
						}`}
						{...register("email", {
							required: true,
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: "Invalid email address",
							},
						})}
					/>
					{errors.email && <p className="text-red-500">Email is required!</p>}

					<br />
					<label htmlFor="password">Enter Password:</label>
					<input
						type="text"
						name="password"
						id="password"
						placeholder="Password@123"
						className={`border-2 border-black rounded-lg m-2 ${
							errors.password ? "border-red-500" : ""
						}`}
						{...register("password", {
							required: true,
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
							maxLength: {
								value: 20,
								message: "Password must be less than 20 characters",
							},
							pattern: {
								value:
									/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
								message:
									"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
							},
						})}
					/>
					{errors.password && (
						<p className="text-red-500">{errors.password.message}</p>
					)}

					<br />

					<input
						type="submit"
						value={isSubmitting ? "Submitting..." : "Submit"}
						disabled={isSubmitting}
					/>
				</form>
			</fieldset>
		</>
	);
}

export default App;
