import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  const filePath = path.join(process.cwd(), '.env'); // File path where you want to write
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const lines = fileContent.split('\n');
  const valid = lines.some(line => line.startsWith(`${username}=${password}`));

  if (!valid) {
    return res.status(400).json({ message: 'Account is not found in the file' });
  }

  res.status(200).json({ message: 'Account found in file' });
}
