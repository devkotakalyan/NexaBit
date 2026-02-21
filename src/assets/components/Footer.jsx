function Footer() {
    return (
        <footer>
            <div className="container mx-auto text-center px-6">
                <p className="mb-2">&copy; {new Date().getFullYear()} NexaBit. All rights reserved.</p>
                <p className="text-[#9ca3af]">Designed and Developed by NexaBit Team</p>
            </div>
        </footer>
    );
}

export default Footer;