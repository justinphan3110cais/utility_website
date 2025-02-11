import { redirect } from 'next/navigation';
import { PAPER_URL } from '../constants';

export default function PaperPage() {
  redirect(PAPER_URL);
}
