import { Context } from 'egg'
export default () => {
	return async (ctx: Context, next: () => Promise<any>) => {
		const { user } = ctx;
		if (!user){
			ctx.status = 401;
      ctx.body = {
        success: false,
        error_msg: '未登陆',
      };
      return;
		}
		await next();
	}
}