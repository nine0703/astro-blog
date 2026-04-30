import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)

  return (
    <section id='home' className='bg-muted -mt-16 pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-4 self-center text-center'>
          <Badge variant='outline' className='text-sm font-normal'>
            服务智慧医院、区域医联体与医疗集团
          </Badge>
          <h1 className='text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl'>
            让医疗服务更高效，让患者体验更连续。
          </h1>
          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            澜心医疗科技围绕智慧医院建设、数据治理、患者服务和区域协同，为医疗机构提供稳健可落地的数字化方案。
          </p>
          <form className='gap-3 py-1 max-sm:w-full max-sm:space-y-2 sm:flex sm:flex-row md:w-sm'>
            <Input type='email' placeholder='请输入工作邮箱' className='bg-background h-10 flex-1 text-base' />
            <Button size='lg' className='text-base max-sm:w-full' asChild type='submit'>
              <a href='/contact-us'>预约咨询</a>
            </Button>
          </form>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {featuredPosts.map((item, index) => (
            <div key={`${item.author}-${index}`} className='group'>
              <Card className='cursor-default py-0 shadow-none'>
                <CardContent className='grid grid-cols-1 px-0 xl:grid-cols-2'>
                  <div className='p-6'>
                    <a href={`/blog/${item.slug}`} className='block h-59.5 w-full overflow-hidden rounded-lg'>
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    </a>
                  </div>
                  <div className='flex flex-col justify-center gap-3 p-6'>
                    <div className='flex items-center gap-1.5 py-1'>
                      <div className='text-muted-foreground flex grow items-center gap-1.5'>
                        <CalendarDaysIcon className='size-5' />
                        <p>{item.pubDate}</p>
                      </div>
                      <Badge
                        className='bg-primary/10 text-primary cursor-pointer border-0 text-sm'
                        onClick={e => {
                          e.preventDefault()
                          e.stopPropagation()
                          window.location.href = `/#category-${item.category}`
                        }}
                      >
                        {item.category}
                      </Badge>
                    </div>
                    <a href={`/blog/${item.slug}`}>
                      <h3 className='text-xl font-medium'>{item.title}</h3>
                    </a>

                    <p className='text-muted-foreground'>{item.description}</p>
                    <div className='flex w-full items-center justify-between gap-1 py-1'>
                      <span className='cursor-pointer text-sm font-medium'>{item.author}</span>
                      <Button
                        size='icon'
                        className='group-hover:bg-primary! bg-background text-foreground hover:bg-primary! hover:text-primary-foreground group-hover:text-primary-foreground border group-hover:border-transparent hover:border-transparent'
                        asChild
                      >
                        <a href={`/blog/${item.slug}`}>
                          <ArrowUpRightIcon />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
