'use client'

// Component Imports
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const CTA = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24' id='get-in-touch'>
      <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
        <Card className='shadow-none'>
          <CardContent>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {/* Left Column - Image */}
              <div className='relative h-64 sm:h-80 lg:h-auto'>
                <img
                  src='/images/cta.webp'
                  alt='Workspace with laptop'
                  className='h-full w-full rounded-lg object-cover'
                  loading='lazy'
                />
              </div>

              {/* Right Column - Content */}
              <Card className='bg-muted rounded-lg border-0 shadow-none'>
                <CardContent className='flex h-full flex-col justify-between gap-4'>
                  <h2 className='text-xl leading-tight font-semibold lg:text-2xl'>
                    准备启动医院门户、患者服务或数据治理项目？
                  </h2>
                  <div>
                    <p className='text-muted-foreground mb-3 text-base'>
                      留下联系方式，我们会结合医院业务场景、现有系统和建设阶段，提供一份更贴近实际的沟通建议。
                    </p>
                    {/* Email Form */}
                    <form className='gap-3 py-1 max-sm:space-y-2 sm:flex sm:flex-row'>
                      <Input type='email' placeholder='请输入工作邮箱' className='bg-background h-10 flex-1 text-base' />
                      <Button size='lg' className='text-base max-sm:w-full' asChild type='submit'>
                        <a href='/contact-us'>预约沟通</a>
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTA
