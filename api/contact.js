export default function handler(req, res) {
try {
if (req.method === "POST") {
return res.status(200).json({
success: true,
message: "Request received successfully"
});
}

return res.status(405).json({ message: "Method Not Allowed" });

} catch (error) {
return res.status(500).json({ message: "Internal Server Error" });
}
}