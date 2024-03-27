import { Link } from "react-router-dom";

const Subscribe = () => {
    return (
        <div className="bg-gray-200 rounded-lg">
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
		<div className="flex flex-col space-y-4 text-center lg:text-left">
			<h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
			<p className="text-lg ">If you own our premium member ship card and get premium books so rigth now <br /> chose our premium & pro prices and sign in our fast !</p>
		</div>
		<div className="flex flex-row items-center self-center border-2 rounded-xl justify-center flex-shrink-0  lg:justify-end">
			<div className="flex flex-row  ">
				<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
				<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-green-500">Subscribe</button>
			</div>
		</div>
	</div>
</section>

<section className="py-20 bg-gray-100 rounded-xl ">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase dark:text-violet-600">Pricing</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow sm:p-8 bg-pink-300">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Beginner</h4>
						<span className="text-6xl font-bold">Free</span>
					</div>
					<p className="mt-3 leading-relaxed dark:text-gray-600">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="flex-1 mb-6 dark:text-gray-600">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded-xl bg-pink-500">Get Started</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded-xl shadow sm:p-8 bg-blue-300">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$24
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Free</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Praesent faucibus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean et lectus blandit</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded-xl bg-green-500">Get Started</a>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6  shadow sm:p-8 bg-purple-400 rounded-xl">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Team</h4>
						<span className="text-6xl font-bold">$72
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
					<p className="leading-relaxed dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul className="space-y-2 dark:text-gray-600">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Everything in Pro</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded-xl bg-blue-500">Get Started</a>
				</div>
			</div>
		</div>
	</div>
</section>

            <section className="py-5 mt-10 border-2 rounded-xl ">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 mt-10 md:py-0 md:px-6">
			<h1 className="text-5xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Subornachar , Noakhali </span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>01864000000</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>RotonRPH@business.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1 text-xl">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-lg shadow-sm p-2 border-2 bg-gray-50" />
			</label>
			<label className="block">
				<span className="mb-1 text-xl">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-lg p-2 border-2 focus:ring focus:ring-opacity-75 bg-gray-50" />
			</label>
			<label className="block">
				<span className="mb-1 text-xl">Message</span>
				<textarea rows="5" className="block w-full rounded-md border-2 bg-gray-50 "></textarea>
			</label>
			<Link to='/'><button type="button" className="self-center px-8 py-3 text-xl rounded-lg text-white font-bold bg-green-500 ">Submit</button></Link>
		</form>
	</div>
</section>
        </div>
    );
};

export default Subscribe;