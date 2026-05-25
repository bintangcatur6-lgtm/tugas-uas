1. Representasi Gambar Wajah

Awalnya gambar wajah diubah menjadi matriks piksel.

Contoh:
gambar 100 × 100 piksel

100×100=10000

Artinya satu gambar memiliki 10.000 nilai piksel.

Kemudian gambar diubah menjadi vector:

x=[x
1
	​

,x
2
	​

,x
3
	​

,...,x
n
	​

]
T

Keterangan:

x = vector wajah
n = jumlah piksel
2. Mean Face (Rata-rata Wajah)

Semua wajah dijumlahkan lalu dicari rata-ratanya.

Rumus:

μ=
M
1
	​

∑
i=1
M
	​

x
i
	​


Keterangan:

μ = mean face
M = jumlah gambar wajah
xᵢ = gambar wajah ke-i

Tujuan:

mencari wajah rata-rata dari seluruh dataset.
3. Normalisasi Data

Setiap wajah dikurangi mean face.

Rumus:

A=X−μ

Keterangan:

A = data hasil normalisasi
X = data wajah asli
μ = mean face

Tujuan:

menghilangkan informasi yang tidak penting,
fokus pada perbedaan antar wajah.
4. Singular Value Decomposition (SVD)

Setelah normalisasi dilakukan SVD:

A=UΣV
T

Keterangan:

A = matriks wajah
U = matriks fitur
Σ = singular values
Vᵀ = eigenface
5. Eigenface

Eigenface diambil dari:

V
T

Bagian ini berisi pola wajah utama.

Hasilnya terlihat seperti wajah abu-abu abstrak.

Contoh visual Eigenface:

6. Projection Wajah

Wajah baru diproyeksikan ke ruang eigenface.

Rumus:

ω
k
	​

=u
k
T
	​

(x−μ)

Keterangan:

ωₖ = bobot fitur wajah
uₖ = eigenface ke-k
x = wajah baru
μ = mean face

Tujuan:

menentukan kemiripan wajah.
Inti Konsep Eigenface

Eigenface bekerja dengan:

mengubah wajah menjadi angka,
mencari pola utama,
mengurangi dimensi data,
lalu membandingkan wajah berdasarkan pola tersebut.
Kesimpulan

Rumus penting pada Eigenface:

Mean Face

μ=
M
1
	​

∑
i=1
M
	​

x
i
	​


Normalisasi

A=X−μ

SVD

A=UΣV
T

Projection

ω
k
	​

=u
k
T
	​

(x−μ)

Semua rumus ini digunakan untuk membantu komputer mengenali wajah manusia secara matematis.