import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, Instagram } from 'lucide-react';

export default function ContactPage() {
	return (
		<div className='space-y-32 py-32'>
			<title>Hubungi Kami | ASCII</title>
			<meta
				name='description'
				content='Hubungi Asisten Laboratorium Informatika (ASCII) untuk pertanyaan, dukungan, atau informasi lebih lanjut.'
			/>
			<section className='space-y-4 text-center'>
				<Badge className='mx-auto'>Kontak</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Hubungi Asisten Laboratorium Informatika (ASCII)
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Jika Anda memiliki pertanyaan, membutuhkan dukungan, atau
					ingin informasi lebih lanjut tentang praktikum, jangan ragu
					untuk menghubungi kami melalui saluran berikut:
				</p>

				<section className='text-left mt-16 grid gap-4 mx-auto rounded-2xl lg:grid-cols-2'>
					{/* instagram */}
					<div className='relative overflow-hidden space-y-4 p-6 border rounded-2xl text-white bg-linear-to-br from-pink-600 to-pink-700 border-pink-500'>
						<h3 className='text-lg font-bold'>
							Chat Kami di Instagram
						</h3>
						<p>
							Ikuti dan kirim pesan langsung ke akun Instagram
							kami
						</p>

						<a
							href='https://www.instagram.com/praktikumif.unmul/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button className='bg-pink-500 hover:bg-pink-600'>
								Pergi ke Instagram <ArrowUpRight />
							</Button>
						</a>
						<Instagram
							className='absolute -bottom-4 -right-4 -rotate-45 opacity-50'
							size={100}
						/>
					</div>

					{/* form pengaduan */}
					{/* TODO: ch link to actual form */}
					<div className='relative overflow-hidden space-y-4 p-6 border rounded-2xl text-white bg-linear-to-br from-ascii-600 to-ascii-700 border-ascii-500'>
						<h3 className='text-lg font-bold'>Form Pengaduan</h3>
						<p>
							Tempat untuk mengirimkan pengaduan atau masukan
							terkait praktikum
						</p>

						<a
							href='https://www.instagram.com/praktikumif.unmul/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button>
								Ayo mengadu <ArrowUpRight />
							</Button>
						</a>

						<img
							src='/ascii-typography.png'
							alt='ASCII'
							className='absolute bottom-4 -right-4 -rotate-45 opacity-50 w-40'
						/>
					</div>

					{/* github organization */}
					<div className='relative overflow-hidden space-y-4 p-6 border rounded-2xl text-white bg-linear-to-br from-slate-600 to-slate-700 border-slate-500'>
						<h3 className='text-lg font-bold'>
							Kunjungi GitHub Organization
						</h3>
						<p>
							Lihat source code, dokumentasi, dan proyek kami di
							GitHub
						</p>

						<a
							href='https://github.com/Praktikum-Informatika-UNMUL'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button className='bg-slate-500 hover:bg-slate-600'>
								Ayo kontribusi <ArrowUpRight />
							</Button>
						</a>
						<Github
							className='absolute -bottom-4 -right-4 -rotate-45 opacity-50'
							size={100}
						/>
					</div>

					{/* discord */}
					<div className='relative overflow-hidden space-y-4 p-6 border rounded-2xl text-white bg-linear-to-br from-fuchsia-600 to-fuchsia-700 border-fuchsia-500'>
						<h3 className='text-lg font-bold'>
							Gabung Server Discord
						</h3>
						<p>
							Bergabung dengan komunitas kami di Discord untuk
							berdiskusi.
						</p>

						<a
							href='https://discord.com/invite/TT7U25YZqa'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Button className='bg-fuchsia-500 hover:bg-fuchsia-600'>
								Ayo Bergabung <ArrowUpRight />
							</Button>

							<img
								src='/discord.svg'
								alt='Discord'
								className='absolute bottom-0 right-0 -rotate-45 opacity-50 w-24'
							/>
						</a>
					</div>
				</section>
			</section>
		</div>
	);
}
