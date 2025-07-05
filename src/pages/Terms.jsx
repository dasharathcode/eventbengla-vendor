const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <p className="mb-4">
        Welcome to MyEventDays! By registering your business on our platform, you agree to abide by the following terms:
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li>You must provide accurate and truthful information about your business.</li>
        <li>You agree to let the admin approve or reject your submission based on verification.</li>
        <li>You are responsible for managing your listings and services.</li>
        <li>We reserve the right to remove any listing that violates our policies.</li>
        <li>Personal data will be handled according to our Privacy Policy.</li>
      </ul>
      <p className="mt-6">
        If you have any questions, feel free to contact us at support@myeventdays.com.
      </p>
    </div>
  );
};

export default Terms;
