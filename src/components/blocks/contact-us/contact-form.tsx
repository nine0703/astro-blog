'use client'

import { UserIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
  return (
    <form className='space-y-6' onSubmit={e => e.preventDefault()}>
      {/* Name Input */}
      <div className='space-y-2'>
        <Label htmlFor='username'>姓名</Label>
        <div className='relative'>
          <Input id='username' type='text' placeholder='请输入姓名' className='peer h-10 pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <UserIcon className='size-4' />
            <span className='sr-only'>姓名</span>
          </div>
        </div>
      </div>

      {/* Email Input */}
      <div className='space-y-2'>
        <Label htmlFor='email'>邮箱</Label>
        <div className='relative'>
          <Input id='email' type='email' placeholder='请输入工作邮箱' className='peer h-10 pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <MailIcon className='size-4' />
            <span className='sr-only'>邮箱</span>
          </div>
        </div>
      </div>

      {/* Subject Input */}
      <div className='space-y-2'>
        <Label htmlFor='subject'>联系电话</Label>
        <div className='relative'>
          <Input id='subject' type='text' placeholder='请输入联系电话' className='peer h-10 pr-9' />
          <div className='text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50'>
            <PhoneIcon className='size-4' />
            <span className='sr-only'>电话</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className='space-y-2'>
        <Label htmlFor='message'>需求说明</Label>
        <Textarea id='message' className='h-28 resize-none' placeholder='请描述医院数字化建设需求' />
      </div>

      {/* Submit Button */}
      <Button type='submit' size='lg' className='w-full text-base'>
        提交咨询
      </Button>
    </form>
  )
}

export default ContactForm
