import { Resolver, Query, Mutation, Arg} from 'type-graphql';
import { TimeItTask } from '../models/TimeItTask';
import { CreateTimeItTaskInput, UpdateTimeitTaskInput} from '../inputs/TimeItTaskInput'

@Resolver()
export class TimeItTaskResolver{
    @Query(()=> [TimeItTask])
    timeItTasks() {
        return TimeItTask.find();
    }

    @Query(()=>TimeItTask)
    timeItTask(@Arg("id") id: string) {
        return TimeItTask.findOne({where: {id}});
    }

    @Mutation(()=>TimeItTask)
    async createTimeItTask(@Arg('data') data: CreateTimeItTaskInput){
        const timeItTask = TimeItTask.create(data);
        await timeItTask.save();
        return timeItTask;
    }

    @Mutation(()=>TimeItTask)
    async updateTimeItTask(@Arg('id') id: string, data: UpdateTimeitTaskInput){
        const timeItTask = await TimeItTask.findOne({ where: { id }});
        if (!timeItTask) throw new Error("TimeItTask not found!");
        Object.assign(timeItTask, data);
        await timeItTask.save();
        return timeItTask;
    }

    @Mutation(()=>Boolean)
    async deleteTimeItTask(@Arg('id') id: string){
        const timeItTask = await TimeItTask.findOne({ where: { id }});
        if (! timeItTask) throw new Error("TimeItTask not found!");
        await timeItTask.remove();
        return true;
    }
}

