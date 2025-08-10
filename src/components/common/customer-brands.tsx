import Image from "next/image"

interface BrandsProps {
  id: number
  imageUrl: string
  name: string
}

export default function CustomerBrands() {
  const imgSrc = "simple-icons_"

  const brands: BrandsProps[] = [
    { id: 1, imageUrl: `/${imgSrc}nike.svg`, name: 'Nike' },
    { id: 2, imageUrl: `/${imgSrc}adidas.svg`, name: 'Adidas' },
    { id: 3, imageUrl: `/${imgSrc}puma.svg`, name: 'Puma' },
    { id: 4, imageUrl: `/${imgSrc}newbalance.svg`, name: 'New Balance' },
    { id: 5, imageUrl: `/${imgSrc}converse.svg`, name: 'Converse' },
    { id: 6, imageUrl: `/${imgSrc}polo.png`, name: 'Polo' },
    { id: 7, imageUrl: `/${imgSrc}zara.svg`, name: 'Zara' },
  ]
  
  return (
    <div className="space-y-6 pt-6 pb-15">
      <h3 className="font-semibold px-4">Marcas Parceiras</h3>

      <div className="flex gap-6 px-4 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden" >
        {brands.map((brand) => (
          <div key={brand.id} className="flex flex-col gap-2 items-center">
            <div className="w-20 h-20 rounded-3xl border-1 border-[#F1F1F1] flex justify-center items-center">
              <Image src={brand.imageUrl} alt={brand.name} width={32} height={32} />
            </div>
            <p className="font-semibold whitespace-nowrap">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
