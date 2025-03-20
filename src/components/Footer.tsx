const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-green-400 to-green-500 text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">© {new Date().getFullYear()} Studio Ghibli Dashboard</p>
          <p className="text-sm">Powered by Ghibli API</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  