import { DataSource } from 'typeorm'
import { dataSourceOptions } from './databse.module'
import { CreateCoursesTable1734990706000 } from 'src/migrations/1734990706000-CreateCoursesTable'
import { CreateTagsTable1734991730267 } from 'src/migrations/1734991730267-CreateTagsTable'
import { CreateCourseTagsTable1734992684077 } from 'src/migrations/1734992684077-CreateCourseTagsTable'
import { CreateCourseIdToCoursesTagsTable1734993083521 } from 'src/migrations/1734993083521-CreateCourseIdToCoursesTagsTable'
import { CreateTagsIdToCoursesTagsTable1734993637773 } from 'src/migrations/1734993637773-CreateTagsIdToCoursesTagsTable'

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1734990706000,
                CreateTagsTable1734991730267,
                CreateCourseTagsTable1734992684077,
                CreateCourseIdToCoursesTagsTable1734993083521,
                CreateTagsIdToCoursesTagsTable1734993637773
        ]
})